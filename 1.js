function getBiodata(name, age){
    biodata = {
        "name" : name,
        "age" : age,
        "address": "alamat",
        "hobbies": ["hobi 1", "hobi 2"],
        "is_married": false,
        "list_school": [
            {
                "name": "SD",
                "year_in": 2019,
                "year_out": 2019,
                "major": null
            },
            {
                "name": "SMP",
                "year_in": 2019,
                "year_out": 2019,
                "major": null
            },
            {
                "name": "SMK",
                "year_in": 2019,
                "year_out": 2019,
                "major": "jurusan"
            },
            {
                "name": "IT Telkom Purwokerto",
                "year_in": 2019,
                "year_out": 2019,
                "major": "jurusan"
            }
        ],
        "skills": [
            {
                "name": "python",
                "level": "beginner"
            },
            {
                "name": "javascript",
                "level": "beginner"
            }
        ],
        "interest_in_coding": true
    }

    return biodata
}

console.log(getBiodata("agil", 20))