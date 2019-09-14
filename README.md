# Steps To Setup MongoDB (v3.4.22) in local machine

## Steps
1. First make sure that the folders **data\db** and **data\log** exists under **C:\\**  
2. Create file **mongod.cfg** inside the mongodb installation folder and add the below contents in it(In may case the installation location is C:\Program Files\mongodb-3.4.22):  
    ```
    systemLog:
        destination: file
        path: c:\data\log\mongod.log
    storage:
        dbPath: c:\data\db
    net:
      port: 27017
    ```
    
3. From commond prompt, go inside the mongodb installation folder and start mongodb server by executing:  
   `.\bin\mongod.exe --config .\mongod.cfg`  

4. Open another command prompt, go inside the mongodb installation folder to create the database and tables for Task Manager project using the attached script **WindowsScript.js**:  
   Command Format: `mongo [host]/database [Path-to-script]`

   In my case, the command is:  
   `.\bin\mongo.exe localhost/task_manager F:\CogAssignments\CaseStudyGit\DataTier\WindowsScript.js`

5. Start mongo client from command prompt by executing:  
   `.\bin\mongo.exe`

6. Validate the Task Manager project tables by executing the below commands once the mongo client is running: 

   ```
   show dbs
   use task_manager
   show collections
   ```
