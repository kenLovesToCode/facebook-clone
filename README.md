This project is a basic cloned of the facebook social media website

### Copy remote, pull and push without error

```

git init
git remote add origin https://github.com/kenLovesToCode/facebook-clone.git
git pull --allow-unrelated-histories origin master
git add -A
git commit -m 'first commit'
git push origin master

```

###firestore deployment

```
sudo npm i -g firebase-tools
firebase login
firebase init
```

- use arrow key and press space bar to select project directory
- What you want to use as your public directory? build
- Configure as a single-page app? Y

```
yarn build || npm run build
```

`firebase deploy`
keep it clean! OK
[kenLovesToCode Facebook-clone](https://kenlovestocode-facebook-clone.web.app)
