## Create Pusher App 

1. Login to https://dashboard.pusher.com/channels
2. Create an app.  https://dashboard.pusher.com/apps
3. Get the following details 
   - app_id
   - key
   - secret 
   - cluster 

## Configure the server side NodeJS app 

1. cd config 
2. cp default-copy.json default.json
3. Replace the values copied from  Pusher
   - app_id
   - key
   - secret 
   - cluster 

## Configure the client

1. Edit public/main.js and replace it with the app key created in Pusher 

    var pusher = new Pusher('REPLACE-ME-WITH-APP-KEY', {
        cluster: 'ap1'
    });

## Start the app 

```
npm start run
```