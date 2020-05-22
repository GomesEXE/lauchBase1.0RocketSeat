const classA = [
    {
        name: "Mayk",
        grade: 1.8
    },
    {
        name: "Diego",
        grade: 10
    },
    {
        name: "Beatriz",
        grade: 9
    },
    {
        name: 'Matheus Gomes',
        grade: 10
    }
]

const classB = [
    {
        name: "Cleiton",
        grade: 10
    },
    {
        name: "Robson",
        grade: 10
    },
    {
        name: "Claudio",
        grade: 0
    },
    {
        name: 'Bryan',
        grade: 5
    }
]

function calculateAvarage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

const average1 = calculateAvarage(classA)
const average2 = calculateAvarage(classB)



function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} | Average: ${average}. STONKS :)`)
    } else {
        console.log(`${turma} | Average: ${average}. NOT STONKS :/ `)
    }

}

sendMessage(average1, 'classA')
sendMessage(average2, 'classB')


function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true;
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`student: ${student.name} is flunked!! :( `)
    }
}

function studentsFlunkeds(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

studentsFlunkeds(classA)
studentsFlunkeds(classB)