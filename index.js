// code your solution here
//saturdayFun
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
    }
    saturdayFun()
 
 //mondayWork   
const mondayWork = function(action="go to the office"){
    return `This Monday, I will ${action}.` 
    }
    mondayWork()    

//wrapAdjective-hard worker
function wrapAdjective (sign="*") {
    return function(character="a hard worker"){
    return `You are ${sign}${character}${sign}!`
        }
    }
//wrapAdjective-dedicated
function wrapAdjective (sign="||") {
    return function(character="a dedicated programmer"){
    return `You are ${sign}${character}${sign}!`
            }
        }
     