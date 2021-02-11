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

Click on **New Project** on the left side, then you be presented to the screen where you have to choose your project name. When choosing a project name have in mind that this name will go on the URL of your endpoints in the format of **http://api.pistonapi.com/{project name}/**.

There are also some constraints. The project name must be unique in the entire PistonAPI and should contain only letters, numbers, hyphens, and underscores (starting with a letter).

After choosing, just click on Create Project. 😊 In our example, we choose **tutorial-waiting-list** as the Project Name. 

### 2 - Create a new model

![A screenshot of the PistonAPI dashboard with a new model](./waiting-list-images/dashboard-w-model.png) This is the screen after you created your new project. Note that the project comes with a model called **Users**. We are not using that model on this project (check more about it on the [Users Model Documentation](/documentation)).

For the waiting list, we need to create a new model. A model represents something that will be manipulated (created, edited, etc) on your project. In this case, we want to create a model that represents each pre-registered user. So, click on **New Model** on the left and you be presented to the New Model screen.

In this screen you have to set two information. The model name and its attributes. 


