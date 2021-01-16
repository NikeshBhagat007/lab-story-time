//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

var moreAboutHome = (address,distance,hasNeighbours) =>
{
    var sResult ="";
    // if(typeof(address) == "string" || typeof(distance) == "string" || typeof(hasNeighbours) == "Boolean")
    // {
    //     sResult +="string";
    // }
    // else if(typeof(address) == number || typeof(distance) == number || typeof(hasNeighbours) == number)
    // {
    //     sResult = sResult.concat("number");
    // }
    // else if(typeof(address) == Boolean || typeof(distance) == Boolean || typeof(hasNeighbours) == Boolean)
    // {
    //     sResult += boolean;
    // }
    sResult = typeof(address) + typeof(distance) + typeof(hasNeighbours);
    return sResult;
}


//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean

function moreAboutKaren(parents,noOfSiblings,isNuclearFamily)
{
    if(arguments.length < 2)
    {
        return false;
    }
    else
    {
        var parentsArg = arguments[0];  //Use arguments inbuilt function to check order or index // also hav arguments .length to check no of arguments
        var noOfSiblingsArgs = arguments[1];
        var isNuclearFamilyArgs = arguments[2];
        if(typeof(parentsArg) == "string" && typeof(noOfSiblingsArgs) =="number" && typeof(isNuclearFamilyArgs) == "boolean") // after knowing order find where correct type or not
        {
            //console.log(true);
            return true;
        }
        else
        {
            //console.log(false);
            return false;
        }
    }
}


//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

function doesFriendExist(ageInText,ageInNumber)
{
    if(ageInText == 'NaN'|| ageInNumber == 'NaN')
    {
       console.log('NaN');
        return 'NaN';
    }
    else if(isNaN(ageInText) || isNaN(ageInNumber))
    {
      console.log(NaN);
        return NaN;
    }
}



//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

function sweetTooth(totalNoOfSweets,sweetsConsumedByKaren,sweetsConsumedInNMeters,metersToTravel)
{
    if(arguments.length == 0)  //when no parameters
    {
        return "No sweets for Karen's friend";
    }
    else
    {
        var nCount = 0;
        for(let i = 0; i< arguments.length ;i++)
        {
            if(isNaN(arguments[i]))  //if any one not a number
            {
                return "No sweets for Karen's friend";
            }
            if(arguments[i] == 0)
            {
                nCount ++;  // if all parameter are 0 count increase to length of parameter
            }
        }
        if(nCount == (arguments.length))
        {
            return 0;
        }
        if(sweetsConsumedByKaren * sweetsConsumedInNMeters > metersToTravel)
        {
            return 0;
        }
    }
}



//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.

var convertToCelsius = (fahrenheit) =>
{
    if(typeof(fahrenheit) == "undefined" || typeof(fahrenheit) == "string" || typeof(fahrenheit) == "object") 
    {
        return "Technical Error!";
    }
    else
    {
        //console.log(((fahrenheit - 32) * (5/9)));
        return ((fahrenheit - 32) * (5/9)); // Formula to calculate celsius
    }
}


//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take

var aDifficultChoice = (choice) =>
{
    switch(choice)
    {
        case 1:
            return "Take her daughter to a doctor";
        case -1:
            return "Break down and give up all hope";
        case undefined:
            return "Wasn't able to decide";
        case "I give up": 
            return "Refused to do anything for Karen";
    }
}


//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
