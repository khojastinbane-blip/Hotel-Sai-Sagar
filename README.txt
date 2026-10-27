HOTEL SAI SAGAR WEBSITE — SIMPLE STUDENT PROJECT

FILES
1. index.html  = Home page
2. menu.html   = Menu page
3. gallery.html = Photo gallery page
4. style.css   = Design, colours, layout and photo sizes
5. script.js   = JavaScript; loads menu.xml and shows menu cards
6. menu.xml    = Menu item data

IMPORTANT: HOW TO TEST XML CORRECTLY
Do not double-click index.html and open it as a file. Browsers block fetch() from loading XML on file:// pages.
Use VS Code + Live Server:
1. Install Visual Studio Code.
2. Open VS Code.
3. Click File > Open Folder.
4. Select the extracted Hotel_Sai_Sagar_Website folder.
5. Open Extensions (the four-square icon on the left).
6. Search for "Live Server" and install it.
7. Open index.html.
8. Right-click inside the code and choose "Open with Live Server".
9. The site opens in your browser. Click Our Menu; it should say "Menu loaded successfully from XML!"

HOW TO PUT IT ON GITHUB PAGES
1. Create/sign in to your GitHub account at github.com.
2. Click the + icon near the top-right, then New repository.
3. Repository name: hotel-sai-sagar
4. Choose Public. Click Create repository.
5. On the repository page, click "Add file" > "Upload files".
6. Open the extracted project folder on your computer.
7. Select and upload ALL SIX project files (index.html, menu.html, gallery.html, style.css, script.js, menu.xml). Upload the files themselves, not just the folder.
8. Scroll down and click "Commit changes".
9. Open repository Settings.
10. Click Pages in the left menu.
11. Under Build and deployment, select "Deploy from a branch".
12. Under Branch, select "main" and folder "/ (root)", then click Save.
13. Wait a minute or two and refresh the Pages section. GitHub will show your website link.
14. Open that link. Test Home, Our Menu, and Gallery. On the menu page, check that the XML menu loads.

IF XML DOES NOT LOAD
- Check the filename is exactly menu.xml (not menu.xml.txt).
- Keep menu.xml in the same folder as menu.html and script.js.
- Check that all files were uploaded to the repository root.
- Refresh the deployed website after GitHub Pages finishes building.
- The website needs internet for the online food photos.

ABOUT THE PHOTOS
The photos use Unsplash image URLs. They need an internet connection. If a particular image URL ever stops working, replace that image URL in gallery.html or style.css with another image URL.

ABOUT THE SAMPLE DETAILS
Hotel name, address, phone number and menu prices are examples. Change them to your project details if needed.
