
let myPositions = [{
    companyName: "Tuskegee University",
    jobTitle: "Junior Web Developer",
    jobDescription: "Designed a login system and created a database to control login privlages"
},
{
    companyName: "Tuskegee University",
    jobTitle: "Research Assistant",
    jobDescription: "Designed a numerical solution to a heat and mass transfer problem and implemented it using CUDA C"
}];
let mySkills = [{
    skillName: "C#",
    isCool: false
},
{
    skillName: "HTML",
    isCool: true
},
{
    skillName: "CSS",
    isCool: true
},
{
    skillName: "JavaScript",
    isCool: true
},
{
    skillName: "C++",
    isCool:false
},
{
    skillName: "PHP",
    isCool: false
},
{
    skillName: "SQL",
    isCool: true
},
{
    skillName: "Bootstrap",
    isCool: true
}];

let capitolizeString = function(oldString){
    return oldString.toUpperCase();
}

let displayPosition = function(companyName, jobTitle, description){
    console.log(`* ${jobTitle} at ${companyName}
    
- ${description}.

`);
}

let displaySkill = function(skillName, isCool){
    if(isCool)
        console.log(`* Check it: ${skillName}
        `);
    else
    console.log(`* ${skillName}
    `);
}

console.log(`Name: ${capitolizeString("andrew underwood")}

Careers: Full Stack Web Developer

Description: I build stuff.

My Interests:

* Video Games

* Reading

* Programming

`);

console.log(`My Previous Experience: 

`);

for (item in myPositions){
    displayPosition(myPositions[item].companyName, myPositions[item].jobTitle, myPositions[item].jobDescription);

}

console.log(`My Skills:

`)

mySkills.forEach(function(item){
    displaySkill(item.skillName, item.isCool);
});