---
sidebar: auto
---

# Documentation

PistonAPI is a low code platform that allows the creation of a RestAPI based backend. With only a couple of clicks, your API is ready to use.


## Introduction

### The Low Code Concept

A good way to clarify what is a low code platform is making an analogy with Microsoft Excel. Excel allows building great things without a single line of code, only pointing and clicking. But when you need more features or customizations you can rely on **formulas** which is an extremely controlled environment that you can type small chunks of code to achieve even more incredible results.

With a low code platform, you can also *build great software without writing code*. And when you need to build some advanced features or customizations you got the flexibility to code! And everything is designed to be resolute within tiny chunks of code.

So in a lot of cases is more productively build some graphics and reports on Microsoft Excel rather than writing an entire software from scratch. That is the same with PistonAPI.

### When to use PistonAPI?

With the same analogy of Microsoft Excel, its spreadsheets don't solve every problem of the world. So the best way of understanding how far can PistonAPI goes is by taking a look at its learning resources. Also, don't hesitate to contact us. There is a button on every page 'Talk with us'.


## Core Concepts

### Projects

A **Project** is a logical subdivision that holds a bunch of models. You can think of it like an app, where each one has its own APIs, databases, permissions, functions, and so on.

The **Project Name** is relevant, because it will go on the URL of all project endpoints, with the format:

```
https://api.pistonapi.com/<YOUR_PROJECT_NAME>/
```

There are some constraints around the **Project Name**. As it goes on the first path of the API URL it must be unique on the entire PistonAPI. If you try to create a Project with a name that already exists, it will throw an error with the message: _Project name already registered. Please, try another._

Every **Project Name** must start with a letter. And contain only letters, numbers, hyphens, and underscores. Having at least 4 characters and a maximum of 36.

Some examples of valid project names:

- ✅ my-dope-app
- ✅ my-amazing-7-app
- ✅ my_project

- ⛔ 7-my-dope-app _(starts with a number)_
- ⛔ my-@dope-app _(invalid character)_
- ⛔ app _(to short)_
 

### Models

A **Model** is an entity that is composed by a **Name** and **Attributes**. To understand its concept you can imagine a **Model** like a table on a database. For **PistonAPI** a **Model** has much more features and peculiarities than a database table, but imaging it like this is a good starting point.

The **Model Name** has some constraints. Differently from the **Project Name**, it must be unique **only on the project scope**, so it can exist two models with the same name on PistonAPI as long as they're in different projects. The **Model Name** also must start with a letter, containing only letters, numbers, hífens, and underscores. Must be at least 4 characters and a maximum of 36.

A **Model** must have at least one **Model Attribute** and have a maximum of 36. In the next chapter, we will talk about **Model Attribute** and their types.

When you set a new **Model** on **PistonAPI** various things are automatically configured along with it. For example, the database. Once you set the **Model**, the **PistonAPI** database is ready to persist data with the attributes set before. There are also permissions, functions, and endpoints (we will address each of these topics in this documentation). All of them are ready to use once you set the model, **effortlessly**.

Another concept is the **Model Item**. If we follow the analogy that the Model is somehow like a database table, a **Model Item** will be a record on that table. The **Model** defines the shape of the information and the **Model Item** is a unity of that information.


### Model Attributes

Each model must have at least one **Attribute**. Each **Attribute** has a name and a type. An **Attribute** holds information (with the specified type) that comes together on each **Model Item**. 

For example, there may be a **Model** called **Book** that has the attribute **Author**. So each **Book** item will have its own **Author**.

The **Attribute Name** (`Author` in the example) must follow the same constraints as we know for naming. It must start with a letter, contain only letters, numbers, hyphens, and underscores. Having at least 4 characters and a maximum of 36.

The **Attribute Type** specify which data type is supported by the attribute.

::: tip
 Each **Attribute Type** has an validation that will be applied to any information provided to that attribute. If the validation fails it will throw an error with the id **InvalidInput**.
:::

PistonAPI acctually have four types available:

- **string** Its made for text. Any content is allowed. The only limitation is the maximum size of 4.096 characters (if your use case needs more, please let us know). The validation is that the content must be provided under double quotes. Example:

``` json
    {
        "my-string-attribute": "Always under double quotes"
    }
```

- **number** Its made for numbers. It can be both integer or decimals. The validation is that the content must be provided without double quotes and the decimal separator must be a dot. Example:

``` json
    {
        "my-number-attribute": 1020.5
    }
```

- **datetime** Its made for date and time. The validation is that the content must be provided with double quotes and have the specific format of ISO860 (YYYY-MM-DDThh:mm:ss).

``` json
    {
        "my-datetime-attribute": "2021-02-25T20:15:56"
    }
```

- **boolean** Its made for values that can only be true or false. The validation is that the content must be provided **without** double quotes and can be only `true` or `false` (lowercase). Example:

``` json
    {
        "my-boolean-attribute": true
    }
```

### Endpoints

Each **Model** has some HTTPS endpoints. That means, some **URL** address that you can do HTTPS requests to interact with the **Model Items**. For every endpoint the request content must allways be a valid [JSON](https://www.json.org/json-en.html).
::: tip
There is an optional header attribute that can be added to each request called `Authorization`. We will talk about this on the Permissions section of the documentation.
:::

For default, we have four endpoints:

- **POST** request to the address **https://api.pistonapi.com/YOUR_PROJECT_NAME/YOUR_MODEL_NAME**. This endpoint must be used when the intention is to **create a new** item of that model. The content (body) of the request **doesn't need to have all attributes of the model but must have at least one**. If an unknown attribute is provided (like a misspelled attribute name) it will throw an error of id **InvalidInput**.

- **PATCH** request to the address **https://api.pistonapi.com/YOUR_PROJECT_NAME/YOUR_MODEL_NAME/YOUR_MODEL_ITEM_ID**. This endpoint must be used when the intention is to **update an existing item** of that model. The **Model Item ID** must be of an existing item (this information is returned on the **POST** endpoint response). The content (body) of the request ** doesn't need to have all attributes of the ones that you want to update**. If an unknown attribute is provided (like a misspelled attribute name) it will throw an error of id **InvalidInput**.

- **DELETE** request to the address **https://api.pistonapi.com/YOUR_PROJECT_NAME/YOUR_MODEL_NAME/YOUR_MODEL_ITEM_ID**. This endpoint must be used when the intention is to **delete an existing item** of that model. The **Model Item ID** must be of an existing item (this information is returned on the **POST** endpoint response). The content (body) is unnecessary and will be ignored.


- **GET** request to the address **https://api.pistonapi.com/YOUR_PROJECT_NAME/YOUR_MODEL_NAME/YOUR_MODEL_ITEM_ID**. This endpoint must be used when the intention is to **retrieve items** of that model. The **Model Item ID** is optional. If you inform it will return a single item that has that ID.

If you do not inform a **Model Item ID** on the **GET** endpoint it will return all items stored (limited to the pagination - see Pagination section)

::: warning
Have in mind that PistonAPI has a special **Model** called `users` that have some peculiarities. That will be covered on a specific topic of the documentation.
:::

### Users Model

Each project comes with a pre-existing model called `users`. This model is designed to manage the `users` of that project.

It has by default three attributes:
- **username** - That is a string that is used to identify the user. It's unique between all `users` of that project.
- **hashedPassword** - Instead of storing the plain password provided by the user, PistonAPI store a hashed version of it (this is a common practice, to learn more [Password Hashing](https://en.wikipedia.org/wiki/Salt_(cryptography)).
- **type** - This is a string that is used to categorize the user on your project. Will be used on Permissions.

The endpoints of **Users Model** have some peculiarities.

- The **POST** endpoint is expecting three value: username, password, and type, like the example below:

``` json
{
    "username": "my-user-username",
    "password": "amazing-password",
    "type": "regular-user"
}
```

The username, as said before, must be unique to the users of your project. If you try to call the **POST** endpoint with an existing username that will throw an error of **invalid uniqueness**.

The password is the plain text password that the user will use to log in later. PistonAPI will automatically generate the hashedPassword from it.

The type is a string that best describes the category of that `user`. If no type is informed PistonAPI will assume the value of `default`.

-  There is an endpoint called **AUTH**. The URL address is  **https://api.pistonapi.com/YOUR_PROJECT_NAME/auth**. Its expecting a **POST** request with the following content: 

``` json
{
    "username": "my-user-username",
    "password": "amazing-password"
}
```

If the username and the password match with a previously registered user, it will return an **authenticationToken**. We will talk about this token on the **Authentication** and **Permissions** section of the documentation.


::: warning
By default, when a new project is created the username and password that you use to log in on PistonAPI is automatically replicated on the user's model with the **Type** equal to `root`. So you are able to login into your own project.
:::

### Authentication

On each request to your project endpoints, you can use a header property called **authentication**. That property must be in the format of:

```
authorization: Bearer <Authentication Token>
```

To obtain the authentication token you must do a **POST** request on the **AUTH** endpoint (the URL will be https://api.pistonapi.com/YOUR_PROJECT_NAME/auth) with the correct username and password. 

If you provide an invalid authentication token it will return an error with the ID Unauthorized. If the token is valid, the request will be considered Authenticated.

### Permissions

Each endpoint has a configuration that is called **Permissions**. This configuration says on which conditions that endpoint can be called. 

The default configuration is **Root Only** to all endpoints. This is the most restrictive permission available. It will check that the request is authenticated and the user has the type equals to `root`.

**Custom User Type** is a permission option that will check if the user is authenticated and has the type as specified on the configuration of the permission. The type input field support Regex so, if you want, you don't have to specify a literal user type, but a pattern that must be matched.

**Public** is the most permissive permission option available. It will allow calls without any authentication at all. It doesn't require even the authorization property on the request header.

### Pagination

The **GET** endpoint of a *Model* can be used to retrieve all available items in the PistonAPI databases. But it is impractical to return all data in a single request. So we have **Pagination**.

**Pagination** will make the request return the data divided into pages. Only a limited number of items will be returned on each request, and to get all the items you must make a request to the next page and so on.

On the response of the **GET** endpoint request you will see a property called pagination as bellow:

```json
  "pagination": {
    "current": 1,
    "total": 4
  }
}
```
This indicates the current page and the total number of pages. To request the next page (or any other) just append to the request URL the query parameter `?page=2` with the desired page number. An example of the final URL requesting the second page will be:

**https://api.pistonapi.com/YOUR_PROJECT_NAME/YOUR_MODEL_NAME?page=2**

By default, PistonAPI will only show 10 items per page. But you can change that, up to 50 items, with another parameter to the URL. The parameter is **page_size**.  An example of the final URL requesting data with a page size of 50 is:

**https://api.pistonapi.com/YOUR_PROJECT_NAME/YOUR_MODEL_NAME?page_size=50**

An example of the final URL requesting the second page data with the page size of 50 is:

**https://api.pistonapi.com/YOUR_PROJECT_NAME/YOUR_MODEL_NAME?page_size=50&page=2**

### Filters

You can filter data retrieved by the **GET** endpoint through **Filters**. For example, let's say you want to retrieve only items which it **name** attribute is equals to **john** you can use  **?filter[name]=john** appended to the URL.

The **Filters** works by adding some query parameters to the **GET** endpoint. The most simple way of using **Filters** is by equality. When you want to get data by specifying literally how the attribute value must be. The syntax is:

```
https://api.pistonapi.com/PROJECT_NAME/MODEL_NAME?filter[ATTRIBUTE_NAME]=ATTRIBUTE_VALUE
```

Of course, replacing the **PROJECT_NAME, MODEL_NAME, ATTRIBUTE_NAME, and ATTRIBUTE_VALUE** with the desired values. An example:

**https://api.pistonapi.com/dope-party/dope-guests?filter[name]=john**

It's possible to add **AND** conditions when you want to specify two or more conditions that all of them must be valid. Just concatenate the other filters with the keyword **&**. The syntax will be:

```
https://api.pistonapi.com/PROJECT_NAME/MODEL_NAME?filter[ATTRIBUTE_ONE_NAME]=ATTRIBUTE_ONE_VALUE&filter[ATTRIBUTE_TWO_NAME]=ATTRIBUTE_TWO_VALUE
```

An example:
**https://api.pistonapi.com/dope-party/dope-guests?filter[name]=john&filter[age]=28&filter[location]=san_andreas**

It's possible to add **OR** conditions when you want to specify two conditions that at least one of them must be valid. To do that just add **[OR]** before the attribute name of each statement. The syntax will be:

```
https://api.pistonapi.com/PROJECT_NAME/MODEL_NAME?filter[ATTRIBUTE_NAME]=POSSIBLE_VALUE&filter[OR][ATTRIBUTE_NAME]=OTHER_POSSIBLE_VALUE
```

An example: 
**https://api.pistonapi.com/dope-party/dope-guests?filter[name]=john&filter[or][age]=28**

It's possible to have **AND** conditions inside your **OR** conditions. To do that, just concatenate the condition. Add **[or]** if it is related to the second part of the **OR** condition.

An example: 
**https://api.pistonapi.com/dope-party/dope-guests?filter[name]=john&filter[age]=25&filter[or][name]=karl&filter[or][age]=28**

That will be equivalent to searching for John 25 years old or for Karl 28 years old. 

::: warning
PistonAPI current does not support **OR** statements with three or more or conditions. For example, the name equals KARL or JOHN, or ELISHA. Let us know if your use case needs this type of feature.
:::

Beyond the equality comparison, you can also some other operators. To use these operators add the operator keyword after the attribute name. For example, the keyword for **greater than** is **gt**, so: **https://api.pistonapi.com/dope-party/dope-guests?filter[age][gt]=25** will filter for items that has the age greater than 25.

Below  is a table with all operators that you can use, and with what type of attribute is compatible.

| Operator| Keyword| String| Number|Datetime|Boolean|
|-|-|-|-|-|-|
|Greater Than| **gt** | ❌ | ✔️| ✔️|❌|
|Greater Than or Equals| **gte** | ❌ | ✔️| ✔️|❌|
|Lower Than| **lt** | ❌ | ✔️| ✔️|❌|
|Lower Than or Equals| **lte** | ❌ | ✔️| ✔️|❌|
|Not Equals| **ne** | ❌ | ✔️| ❌|❌|

You can combine all operators e conditionals in an amazing search.

::: tip
If you don't find the operator that you need, let us know.
:::

### Enforced Filters

The **Enforced Filters** is a feature used to restrict the items that can be manipulated on an endpoint. It can be applied to **every endpoint** except for the **POST endpoint**. Has the same syntax as a **Filter** but it's enforced before it tries to perform the desired action of that endpoint. It is a dashboard configuration, so the caller of the endpoint will not see it, or have the option of bypass it.

For example, if you set an **Enforced Filters** of **filter[name]=john** to the **GET** endpoint, this endpoint will always retrieve only items that have the name equals to **john**, no matter which **Filter** the caller provide on the URL, it will always have to meet the condition of the **Enforced Filters** before applying the **Filter** provided on the URL.

There is a special keyword that can be used on the **Enforced Filter** that is **$currentUser**. It that you have access to the authenticated user object (if there is an authenticated user) and will be able to create a more complex **Enforced Filter**. For example, **filter[name]=$currentUser.username** will only retrieve items that have the name equals to the authenticated user username that makes the call.

**Enforced Filter** can also be used on the **PATCH** endpoint to restrict the items that can be modified by that endpoint. For example, **filter[status]=draft** will only allow items with the status equals to draft to be edited by the **PATCH** endpoint.

The set an **Enforced Filter** go to PistonAPI dashboard, select the **Project** and the **Model**, and on the corresponding endpoint, click on the three dots, and then, on **Enforced Filter**.

### Functions
