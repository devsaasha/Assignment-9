const studentData =[
    {
       name : 'S A Asha',
       roll : 1,
       age : 10,
       class : 'Five',
       gender : 'Female',
       Location : 'Jamil Nagor',
       Admission_fee : 1500
    },
    {
       name : 'Tithi paul',
       roll : 2,
       age : 12,
       class : 'Five',
       gender : 'Female',
       Location : 'Jamil Nagor',
       Admission_fee : 1500
    },
    {
       name : 'Ritu Bormon',
       roll : 3,
       age : 15,
       class : 'Seven',
       gender : 'Female',
       Location : 'Johurul Nagor',
       Admission_fee : 1700
    },
    {
       name : 'Arman Rafi',
       roll : 4,
       age : 22,
       class : 'Nine',
       gender : 'Malea',
       Location : 'Jamil Nagor',
       Admission_fee : 1900
    },
    {
       name : 'Sohag Candra',
       roll : 5,
       age : 25,
       class : 'Ten',
       gender : 'Male',
       Location : 'Seusgari',
       Admission_fee : 2000
    }
]
console.log(JSON.stringify(studentData));

let data =`[{"name":"S A Asha","roll":1,"age":10,"class":"Five","gender":"Female","Location":"Jamil Nagor","Admission_fee":1500},{"name":"Tithi paul","roll":2,"age":12,"class":"Five","gender":"Female","Location":"Jamil Nagor","Admission_fee":1500},{"name":"Ritu Bormon","roll":3,"age":15,"class":"Seven","gender":"Female","Location":"Johurul Nagor","Admission_fee":1700},{"name":"Arman Rafi","roll":4,"age":22,"class":"Nine","gender":"Malea","Location":"Jamil Nagor","Admission_fee":1900},{"name":"Sohag Candra","roll":5,"age":25,"class":"Ten","gender":"Male","Location":"Seusgari","Admission_fee":2000}]`;

console.log(JSON.parse(data));