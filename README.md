<html>
# Github_Tutorial

1. **Adding a new repository**

echo "# This is my first commit" >> README.md

- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin `https://github.com/`<div style="color: red;">**your_user**</div>/**your_repo**
- git push -u origin main

2. **Add an existing repository**

//Copies an existing repository to your computer

- git clone `https://github.com/`**some_user**/**some_repo**

3. Updating exiting files in your repository

//Add all files

- git add .

//Add a specific file ie: **index.html**

- git add someFile.fileextension

//Commits to adding your changes to the repository

- git commit -m "new message"

//Pushes changes up to your GitHub repository

- git push

**Additional Commands**

//Display the current status of your files. Do this often!

- git status

//Switch to another branch

- git checkout some_branch

```

```

</html>
