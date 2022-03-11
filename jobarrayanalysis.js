var data = {
length: 100,
message: "Here are all the jobs we have",
status: 200,
jobs: [
{
_id: "5734cfdb4fec42464cce730a",
location: {
_id: "573247a84fec42464cce6b45",
name: "Mission Hospital Mission Viejo",
city: "Mission Viejo",
state: "CA",
latitude: 33.5610035,
longitude: -117.6653186,
photoUrls: [ ]
},
shiftHours: "07:00AM - 07:00PM",
job_ids: [ ],
agent: "56f04aa636d0c31a693b1523",
specialty: {
_id: 7,
specialty: "er"
}
},
{
_id: "5734cfdb4fec42464cce730b",
location: {
_id: "573247a84fec42464cce6baa",
name: "Southeast Georgia Health System - Brunswick Campus",
city: "Brunswick",
state: "GA",
latitude: 31.174247,
longitude: -81.484591,
photoUrls: [ ]
},
shiftHours: "07:00PM - 07:0AM",
job_ids: [ ],
agent: "56f04aa636d0c31a693b1523",
specialty: {
_id: 7,
specialty: "er"
}
}]
};

// function showmenames(element, index, array) {
//   console.log(array.jobs[index].element);
// };

// data.forEach(showmename);


// console.log(data.jobs);







all_jobs.foreach(function (job,index){
  if(job["specialty"]["specialty"]==="er")

)};
