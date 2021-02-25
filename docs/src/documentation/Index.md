---
sidebar: auto
---

# Introduction

PistonAPI is a low code platform that allows the creation of a RestAPI based backend. With only a couple of clicks, your API is ready to use.



## The Low Code Concept

A good way to clarify what is a low code platform is making an analogy with Microsoft Excel. Excel allows building great things without a single line of code, only pointing and clicking. But when you need more features or customizations you can rely on **formulas** which is an extremely controlled environment that you can type small chunks of code to achieve even more incredible results.

With a low code platform, you can also *build great software without writing code*. And when you need to build some advanced features or customizations you got the flexibility to code! And everything is designed to be resolute within tiny chunks of code.

So in a lot of cases is more productively build some graphics and reports on Microsoft Excel rather than writing an entire software from scratch. That is the same with PistonAPI.

## When to use PistonAPI?

With the same analogy of Microsoft Excel, its spreadsheets don't solve every problem of the world. So the best way of understanding how far can PistonAPI goes is by taking a look at its learning resources. Also, don't hesitate to contact us. There is a button on every page 'Talk with us'.


# Core Concepts

## Projects

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
 

## Models

A **Model** is an entity that is composed by a **Name** and **Attributes**. To understand its concept you can imagine a **Model** like a table on a database. For **PistonAPI** a **Model** has much more features and peculiarities than a database table, but imaging it like this is a good starting point.

The **Model Name** has some constraints. Differently from the **Project Name**, it must be unique **only on the project scope**, so it can exist two models with the same name on PistonAPI as long as they're in different projects. The **Model Name** also must start with a letter, containing only letters, numbers, hífens, and underscores. Must be at least 4 characters and a maximum of 36.

A **Model** must have at least one **Model Attribute** and have a maximum of 36. In the next chapter, we will talk about **Model Attribute** and their types.

When you set a new **Model** on **PistonAPI** various things are automatically configured along with it. For example, the database. Once you set the **Model**, the **PistonAPI** database is ready to persist data with the attributes set before. There are also permissions, functions, and endpoints (we will address each of these topics in this documentation). All of them are ready to use once you set the model, **effortlessly**.

Another concept is the **Model Item**. If we follow the analogy that the Model is somehow like a database table, a **Model Item** will be a record on that table. The **Model** defines the shape of the information and the **Model Item** is a unity of that information.


## Model Attributes

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
        my-string-attribute: "Always under double quotes"
    }
```

- **number** Its made for numbers. It can be both integer or decimals. The validation is that the content must be provided without double quotes and the decimal separator must be a dot. Example:

``` json
    {
        my-number-attribute: 1020.5
    }
```

- **datetime** Its made for date and time. The validation is that the content must be provided with double quotes and have the specific format of ISO860 (YYYY-MM-DDThh:mm:ss).

``` json
    {
        my-datetime-attribute: "2021-02-25T20:15:56"
    }
```

- **boolean** Its made for values that can only be true or false. The validation is that the content must be provided **without** double quotes and can be only `true` or `false` (lowercase). Example:

``` json
    {
        my-boolean-attribute: true
    }
```

## Users Model

## Endpoints
## Permissions
## Pagination
## Filters
## Enforced Filters
## Functions


# Using your APIs
## User Project Authentication
## Creating a new item
## Getting existing items
## Editing a existing item
## Deleting a existing item

# Other concepts
## Regex Pattern
## Limitations and Edge Cases