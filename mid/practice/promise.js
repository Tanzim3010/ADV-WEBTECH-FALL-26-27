function getStudentResult(){
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            const success = true;

            if(success) {
                resolve({
                    id: 101,
                    name: "Rahim",
                    department: "CSE",
                    marks: 85
                });
            }
            else{
                reject("Failed to retrieve student result");
            }
        }, 3000);
    });
}

async function displayResult(){
    console.log("Getting student info..");

    try{
        const student = await getStudentResult();
        console.log("Student data recieved");
        console.log("ID: ",student.id);
        console.log("Name: ",student.name);
        console.log("dept: ",student.department);
        console.log("cgpa: ",student.marks);
        console.log("Result processing completed");
    }
    catch(error) {
        console.log("Something went wrong",error);
    }
    
}

displayResult();