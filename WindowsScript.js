//Set the database
//use task_manager

//Create the collection for Parent Task
db.createCollection("parent_task")

//Set the index on parent_id (ascending)
db.parent_task.createIndex( { parent_id: 1 } )

//Create the collection for Task
db.createCollection("task")

//Set the index on task_id (ascending)
db.task.createIndex( { task_id: 1 } )

//Create the collection for Database Sequences
db.createCollection("database_sequences")
