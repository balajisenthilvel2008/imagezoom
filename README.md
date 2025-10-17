# Ex.08 Design of Interactive Image Gallery
##Date: 10-10-2025

## AIM
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS

###Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## CODE
```
gallery.html

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Image Gallery</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="gallery">
    <img src="im-1.jpg" id="image1" alt="leopard">
    <img src="im-2.jpg" id="image2" alt="lion">
    <img src="im-3.jpg" id="image3" alt="kingfisher">
    <img src="im-4.jpg" id="image4" alt="toucan">
  </div>

  <footer>
    <h1 >Created by</h1>
    <h2 >&copy;Balaji S</h2>
  </footer>

  <script src="script.js"></script>
</body>
</html>

script.js
const images = document.querySelectorAll('.gallery img');

images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(2) rotate(5deg)';
    image.style.boxShadow = '0 20px 40px rgba(0,255,255,1)';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1) rotate(0deg)';
    image.style.boxShadow = '';
  });
});

style.css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: linear-gradient(180deg, blueviolet, #8e906f, #384043, #50565f);
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color: white;
  text-align: center;
  padding: 40px 0;
}

.gallery {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 100px;
}

.gallery img {
  width: 200px;
  height: 250px;
  border: 8px solid aqua;
  border-radius: 15px;
  transition: transform 1s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

footer {
  margin-top: 80px;
}

h1 {
  font-size: 35px;
  font-family:Lucida Calligraphy;
  color:yellow;
}

h2 {
  font-size:25px;
  font-family:Lucida Calligraphy;
  color:pink;
}

```
## OUTPUT

![alt text](<Screenshot 2025-10-17 160504.png>)

## RESULT
The program for implementing image maps using HTML is executed successfully.
