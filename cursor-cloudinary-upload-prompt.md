# Cursor Prompt --- Cloudinary Photo Upload Page

Use this prompt inside Cursor to plan and implement the project.

------------------------------------------------------------------------

# ROLE

You are a senior frontend engineer.\
Your task is to **plan and implement a simple Cloudinary image upload
web page** using **pure HTML, CSS and JavaScript**.

You must:

1.  First **plan the architecture**
2.  Then **implement the project**
3.  Produce **clean and readable code**
4.  Keep the project **framework‑free**
5.  Make the UI **clean and modern**

------------------------------------------------------------------------

# PROJECT GOAL

Build a simple web page that allows a user to:

1.  Enter their **name**
2.  Upload a **photo**
3.  Send the image to **Cloudinary**
4.  Save the file using a structured name:

```{=html}
<!-- -->
```
    nome_YYYYMMDD_HHMM

Example:

    sergio_20260312_1645.jpg

All uploads must go to the Cloudinary folder:

    uploads/

------------------------------------------------------------------------

# TECH STACK

Use only:

-   HTML
-   CSS
-   Vanilla JavaScript
-   Cloudinary Upload API

Do NOT use:

-   React
-   Next.js
-   frameworks
-   build tools
-   npm

The project must run by simply opening:

    index.html

------------------------------------------------------------------------

# PROJECT STRUCTURE

Create the following structure:

    cloudinary-upload/
    │
    ├── index.html
    ├── success.html
    ├── styles.css
    ├── script.js
    └── README.md

------------------------------------------------------------------------

# UI REQUIREMENTS

The interface must be:

-   clean
-   minimal
-   centered layout
-   responsive
-   modern looking

Use:

-   rounded corners
-   soft shadows
-   neutral colors
-   clear button

Container:

-   max-width: 420px
-   centered vertically and horizontally

Font:

    system-ui

------------------------------------------------------------------------

# MAIN PAGE

Title:

    Enviar Foto

Form fields:

### Name input

Label:

    Nome

Type:

    text

Required.

### Photo input

Label:

    Escolher foto

Type:

    file

Accept:

    image/*

### Submit button

Text:

    Enviar Foto

------------------------------------------------------------------------

# FILE NAMING

When submitting:

1.  Read the name field
2.  Generate a timestamp:

```{=html}
<!-- -->
```
    YYYYMMDD_HHMM

Example:

    20260312_1645

Then generate:

    uploads/${name}_${timestamp}

Example:

    uploads/sergio_20260312_1645

This will be used as:

    public_id

------------------------------------------------------------------------

# CLOUDINARY UPLOAD

Upload using:

    POST https://api.cloudinary.com/v1_1/<CLOUD_NAME>/image/upload

Use `FormData` with:

    file
    upload_preset
    public_id
    folder

Where:

    folder = uploads

------------------------------------------------------------------------

# CONFIGURATION

At the top of `script.js` create:

``` javascript
const CLOUD_NAME = "YOUR_CLOUD_NAME"
const UPLOAD_PRESET = "YOUR_UNSIGNED_UPLOAD_PRESET"
```

------------------------------------------------------------------------

# AFTER UPLOAD

When the upload succeeds:

Redirect to:

    success.html

Passing the image URL:

    success.html?image=<image_url>

------------------------------------------------------------------------

# SUCCESS PAGE

Display:

Title:

    Upload realizado com sucesso

Show the uploaded image.

Add a button:

    Enviar outra foto

That links to:

    index.html

------------------------------------------------------------------------

# CSS REQUIREMENTS

Styles must include:

-   centered layout
-   card container
-   rounded corners
-   subtle shadow
-   clean spacing
-   responsive behavior

Button style:

-   blue
-   hover effect
-   cursor pointer

------------------------------------------------------------------------

# README

Create a README explaining:

## How to create Cloudinary upload preset

Steps:

1.  Go to Cloudinary dashboard
2.  Open:

```{=html}
<!-- -->
```
    Settings → Upload

3.  Create:

```{=html}
<!-- -->
```
    Unsigned Upload Preset

4.  Enable:

```{=html}
<!-- -->
```
    Unsigned uploads

5.  Copy the preset name

6.  Update:

```{=html}
<!-- -->
```
    script.js

Replace:

    CLOUD_NAME
    UPLOAD_PRESET

------------------------------------------------------------------------

# IMPLEMENTATION PROCESS

Follow this order:

1.  Explain the **project plan**
2.  Create the **HTML**
3.  Create the **CSS**
4.  Implement the **JavaScript upload logic**
5.  Implement **success page**
6.  Write **README**

Keep code well formatted and commented.
