let db={
    host:"localhost",
    user:"root",
    password:"cdac",
    database:"nodeConnect",
    port:3306
}

const mysql=require("mysql2");
const conn=mysql.createConnection(db);

const express=require("express");
const app=express();

app.use(express.static("allHtml"));

app.listen(450,function(){
    console.log("server listening......");

});

app.get('/getAllResources', (req, res) => {

    conn.query('select * from resource', [],
        (err, rows) => {
            console.log(rows);
            res.send(rows);
        });

});

app.get('/getResources',(req,resp)=>
{
    let id=req.query.id;

    let output={status1:false, resourceDetail:{id:0, resourcename:"", status:false}};

    conn.query('select resourcename,status from resource where id=?',[id],
    (err,rows)=>{

        if(err){
            console.log(err);
        }
        else{
            if(rows.length>0)
            {
                output.status1=true;
                console.log(rows[0]);
                output.resourceDetail=rows[0];
            }
        }
        resp.send(output);

    });



});


app.get('/insertResources',(req,resp)=>
{
    let input={id:req.query.id, resourcename:req.query.resourcename, status2:req.query.status2};

    let output={status1:false}

conn.query('insert into resource values(?,?,?)',[input.id,input.resourcename,input.status2],
(err,rows)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        if(rows.affectedRows>0)
        {
            output.status1=true;
            console.log("Row inserted");
        }
    }
   resp.send(output);

});

});

app.get('/updateResources',(req,resp)=>
{
    let input={id:req.query.id,resourcename:req.query.resourcename ,status2:req.query.status2};
   

    let output={status1:false}

conn.query('update resource1 set resourcename=? , status=? where id=?;',[input.resourcename,input.status2,input.id],
(err,rows)=>{
    if(err)
    {
        console.log("error");
        console.log(err);
    }
    else{
        if(rows.affectedRows>0)
        {
            output.status1=true;
            console.log("Row updated");
        }
        else
          console.log("update failed due to where condition");
    }
   resp.send(output);

});

});

app.get('/getResourcesOnStatus', (req, res) => {

    let input=req.query.status;
    conn.query('select * from resource where status=?', [input],
        (err, rows) => {
            if (err) {
                console.log("error has occured let see");  
            }
            else{
                  if(rows.length>0)
                  {
                    console.log(rows);
                     res.send(rows);
                  }
            }
        });

});