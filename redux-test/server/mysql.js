let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'wenlonguser'
})

connection.connect((err, result) => {
    if (err) {
        console.log(err);
        console.log('连接失败');
        return;
    }
    console.log(result);
    console.log('连接成功');
})



/**
 * ------------
 * 查询数据
 * ------------
 */

let selectSql = "SELECT * FROM users";
connection.query(selectSql, (err, result) => {
    if (err) {
        console.log('[SELECT 失败] - ', err.message);
        return;
    }

    console.log('---------SELECT-----------');
    console.log('查询成功:', result);
    console.log('------------------------\n\n');
})

/**
 * -------------------
 * 增加数据
 * -------------------
 */
let addSql = "INSERT INTO users(Id,name,email,age,city) VALUES(0,?,?,?,?)";
let addSqlParams = ['赵七2', '777@qq.com', '22', '大连'];

connection.query(addSql,addSqlParams,(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('--------------INSERT-------------');
    console.log('增加成功 ID:',result.insertId);
    console.log('增加成功:', result);
    console.log('--------------------------------\n\n');
})


/**
 * -------------------
 * 更新数据
 * -------------------
 */

let modSql = "UPDATE users SET name = ?,email = ? WHERE Id=?";
let modSqlParams = ['TOMs', 'tom@qqs.com', 7]

connection.query(modSql, modSqlParams, (err, result) => {
    if (err) {
        console.log('[更新失败] - ', err.message);
        return;
    }
    console.log('----------UPDATE---------------');
    console.log('更新成功', result.affectedRows);
    console.log(result);
    console.log('-------------------------------\n\n');
})


/**
* -------------------
* 删除数据
* -------------------
*/

let delSql = "DELETE FROM users WHERE Id=9";
connection.query(delSql, (err, result) => {
    if (err) {
        console.log('[删除失败] - ', err.message);
        return;
    }

    console.log('--------DELETE---------------');
    console.log('删除成功', result.affectedRows);
    console.log(result);
    console.log('------------------------\n\n');
});

connection.end();
