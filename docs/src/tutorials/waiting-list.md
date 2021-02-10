---
sidebar: auto
---
# Create an Waiting List backend feature

## What we are building

In this tutorial, you will learn how to set up a backend for a waiting list feature. Before digging-in in the which APIs we will be creating, let's take a look at the user experience.

**In the frontend**,  a simple form where the users type their email (and maybe others info too) to submit to a pre-register.

**In the admin area**, the admins only with right credentials will be able to retrieve all submited data.

To meet these requirements we will need two APIs endpoints. The first one is used for the register of a new item. In this case, registry a new user in the waiting list. This should be public, where anyone can call it, even without any authentication.

The second is get all registered items. But this one must be restricted to authenticated users only.
