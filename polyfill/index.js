if(!Array.prototype.myForEach){
Array.prototype.myForEach = function(UserFn){
     const originalArr = this;//this current object ki taraf point karta ha 

     for (let i = 0 ; i < originalArr.length ; i++){
        UserFn(originalArr[i],i);    
    }


    }
}


if(!Array.prototype.myMap){
    Array.prototype.myMap = function(UserFn){
        const result =[];

        for (let i =0 ; i < this.length ; i++){
            const value = UserFn(this[i],i);
            result.push(value);

        }
        return result
    }
}


if (!Array.prototype.myFilter)
{
    Array.prototype.myFilter = function(userFn){
        
        const result = []

        for(i = 0 ; i < this.length ; i++)
        {
            if(userFn(this[i])){
                result.push(this[i]);
            }
        }

        return result


    }
    
}

const arr = [1,2,3,4,5,6]
//Error : .foreach function does not exist on arr variable

//polyfill likhne ke pehle uska Real signature ko samjo--
//foreach ka signature - No return, function input,value, index
//calls  my fn for every value


const ret = arr.myForEach(function (value , index){
    
    console.log(`Value at index ${index} is ${value}`);

})

console.log(`ret is`,ret)


//signature .map
//Return  -New Array , Each Ele Iterate,UserFn

const n = arr.map(e => e*2)
console.log(n);
console.log(arr);


const n3 = arr.myFilter(e => e % 2 == 0)
console.log(n3);
