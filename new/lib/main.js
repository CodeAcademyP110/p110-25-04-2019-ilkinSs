//
// 1) worker created
// 2) choose his position
// 3) add this worker in this position class array
// 4) if this position doesnt exist, add this position into select, and after do #3


let name = document.querySelector('.name');
let lastName = document.querySelector('.lastname');
let email = document.querySelector('.email');
let position = document.querySelector('.position');
let body = document.querySelector('body');

// name.onclick = function(){
//     alert('ska')
// }
// lastName.onclick = function(){
//     alert('ska')
// }
// email.onclick = function(){
//     alert('ska')
// }
// position.onclick = function(){
//     alert('ska')
// }

let workerCounter = 1;
let PositionCounter = 1;


class Database{
    constructor()
    {
       
        this._database = [];
    }
    AddNewPosition(position)
    {
        this._database.push(position);
    }
}



class Position
{
    constructor(positionName)
    {
        this._id = PositionCounter++;
        this._positionName = positionName;
        this._workers = []
    }
    AddNewWorker(worker)
    {
        this._workers.push(worker);
    }
}

class Worker
{
    constructor(name, lastname, email, position)
    {

        this._name = name;
        this._lastname = lastname;
        this._email = email;
        this._position = position;
        this._id = workerCounter++
    }

}


let developer = new Position('developer');
let santexnik = new Position('santexnik');

let ilkin = new Worker('ilkin', 'sardarov' , 'balaw2.az')
let elcin = new Worker('elcin', 'sasas' , 'sasaassa.az')
let samir = new Worker('ilkin', 'sardarov' , 'balaw2.az')
let babel = new Worker('elcin', 'sasas' , 'sasaassa.az')
// let ilkin = new Worker('Ilkin', 'Sardarov', 'ilkinss@code.edu.az');


developer.AddNewWorker(ilkin)
developer.AddNewWorker(elcin)
santexnik.AddNewWorker(babel)
santexnik.AddNewWorker(samir)

let dataBase = new Database('database')

dataBase.AddNewPosition(developer);
dataBase.AddNewPosition(santexnik);






body.onkeydown = function(e){
  
    if(e.keyCode === 13){

        workerName = name.value.trim();
        workerLastName = lastName.value.trim();
        workerEmail = email.value.trim();
        positionName = position.value.trim();

        //CREATING NEW Worker and New POSITION AND ADDING IT TO DATABASE
        let newWorker = new Worker (workerName, workerLastName, workerEmail);
        let workerPosition = new Position(positionName);  
        workerPosition.AddNewWorker(newWorker);
        dataBase.AddNewPosition(workerPosition)
       
       


        console.log(workerName)
        console.log(workerLastName)
        console.log(workerEmail)
        console.log(positionName)
        ;
    }
}


