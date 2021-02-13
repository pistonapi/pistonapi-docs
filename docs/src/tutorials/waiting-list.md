---
sidebar: auto
---
# Beginner Tutorial

## Create an Waiting List backend feature

### What we are building

In this tutorial, you will learn how to set up a backend for a waiting list feature. Before digging-in in the which APIs we will be creating, let's take a look at the user experience.

**In the frontend**,  a simple form where the users type their email (and maybe others info too) to submit to a pre-register.

![A wireframe with a example of form to pre-register](./waiting-list-images/wireframe.png)

_The frontend wireframe example._

**In the admin area**, users with right permissions should be able to retrieve all submited data.

To meet these requirements we will need **two APIs endpoints**. The first one is used for the register of new user in the waiting list. This should be public, where anyone can call it, even without any authentication.

The second is used to get all registered users. But this one must be restricted to authenticated users only.

### 1 - Create a new project at PistonAPI

In order to setup the needed API endpoint, you will have to go to [pistonapi.com](https://pistonapi.com) and create a new project. This is pretty straightforward. After you login at PistonAPI you should see a screen like this (if you have no projects created yet).

![A screenshot of the PistonAPI dashboard](./waiting-list-images/dashboard.png)

Click on **New Project** on the left side, then you be presented to the screen where you have to choose your project name. When choosing a project name have in mind that this name will go on the URL of your endpoints in the format of **https://api.pistonapi.com/{project name}/**.

::: tip
There are some constraints around the project name. It must be unique in the entire PistonAPI and contain only letters, numbers, hyphens, and underscores (starting with a letter).
:::

After choosing, just click on Create Project. 😊 In our example, we choose **tutorial-waiting-list** as the Project Name. 

### 2 - Create a new model

![A screenshot of the PistonAPI dashboard with a new model](./waiting-list-images/dashboard-w-model.png) This is the screen after you created your new project. Note that the project comes with a model called **Users**. We gonna talk more about this in the next step.

For the waiting list, we need to create a new model. A model represents something that will be manipulated (created, edited, etc) on your project. In this case, we want to create a model that represents each pre-registered user. So, click on **New Model** on the left and you be presented to the New Model screen.

In this screen, you have to set two information. The model name and its attributes. Given that the new model will represent a pre-registered user, a good call will be **pre-registered-user**.

::: tip
Keep in mind that are also some contraints about the model name. It will go in the url of the API endpoint, right after the project name like **https://api.pistonapi.com/{project name}/{model name}** so it must be an unique name **in that project**.
:::

Now you will have to set these model attributes. An attribute is a place to hold some information on each item of your model. Since that this model is about a **pre-registered-user** an **email** is a piece of information that we want to have for each **pre-registered-user**.

Click on **Add Attribute** button. Two new fields will appear. The attribute name and its type. As said, **email** is the name that we will use and the type will be a **string**.

![A screenshot of the PistonAPI new model screen](./waiting-list-images/new-model.png)

_This is how the screen will look like after fulfilling everything that we need for this project_

::: tip
There is four attribute types available. String that is a text, Number that is a number, Datetime that is a date and time value and Boolean that is can only be TRUE or FALSE. In our case, an email will be of type string.
:::

Click on **Create Model** button. Your model will be created and you will be redirected to the model overview screen. There you can check the total number of items, number of requests, its schemas and most important the endpoints.

PistonAPI automatically creates four endpoints with your model. Lets try some of then.

The POST endpoint will be able to create a new pre-registered-user. Just send a JSON with the attributes that we set before, to the address ***https://api.pistonapi.com/<YOUR_PROJECT_NAME>/<YOUR_MODEL_NAME>***

```json
{
    "email":"john@doe.com"
}
```

In the response data, will be provided an ID along with the request data. With this ID you can retrieve this item through the GET endpoint at the address ***https://api.pistonapi.com/<YOUR_PROJECT_NAME>/<YOUR_MODEL_NAME>/<ITEM_ID>***

And you can also retrieve all pre-registered-users through the GET endpoint by not providing a specific ID. The address will be ***https://api.pistonapi.com/<YOUR_PROJECT_NAME>/<YOUR_MODEL_NAME>/***

At this point, you already has the endpoints that you need for your application. The only issue is that all endpoints has the default permission, which is only allow calls with authentication of a user of your project with type `root`.

### 3 - Project Users

Before setting the last thing that we need on our project, let`s do a quick overview of what is a Project User and how you can authenticate with those.

With each new project, PistonAPI creates automattically a **User** model. This model contains all users of your project. After you create a new user (through the POST endpoint) you can obtain the authentication token with the AUTH endpoint, that can be used on other endpoints to make a authenticated calls.

For all that to work, the user model have some peculiarities. The POST endpoint, for example, is expecting a JSON with username, password and type.

``` json
{
    "username": "john@doe.com",
    "password": "super_secret",
    "type": "regular_user",
}
```

If the username or the password is not informed, the PistonAPI will generate a random for you. If the type is not informed, PistonAPI will assume the `DEFAULT` type.

And the AUTH endpoint (that is the method POST on the url ***https://api.pistonapi.com/<YOUR_PROJECT_NAME>/auth*** ) is expecting the username and the password. If they match correctly, it will return a authenticationToken, like this:

``` json
{
  "authenticationToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6I0dXRvcmlhbC13YWl0aW5nLWxpc3QiXSwiaWF0IjoxNjEzMjMxMDYyfQ.SQMlSyVPdCf7VlnDpiFjFxdRwmspqwAzOkJre-l6jZQ"
}
```

This authenticationToken can be used on the header of other API calls to turn it an authenticated call. The header must be in the format:

authorization: Bearer ***< authenticationToken >***

By default, the username and password that you used to login on PistonAPI is automattically replicated on your **user** model data, with the type `ROOT`.

### 4 - Changing endpoint permissions

As said before, the pre-registered-user model will only accept authenticated calls with a user of type `ROOT`. 

This is perfectly fine to the GET, PATCH and DELETE endpoints. After all, we just want some authorized users having access to the pre-registered-user data. 

But the POST endpoint should be public, because we want to anyone be able to create a new pre-registered-user item.

To change that, click on the Permissions option of the POST endpoint, just like the image bellow.

![A screenshot of the PistonAPI dashboard highlighting the permissions button](./waiting-list-images/dashboard-permissions.png)

Choose the `public` option and we a ready to go.

![A screenshot of the PistonAPI dashboard highlighting the permissions button](./waiting-list-images/dashboard-permissions-widget.png)

### 5 - Conclusion