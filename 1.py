def get_biodata(name, age):
    biodata = {
        "name": name,
        "age": age,
        "address": "Jl. MH. Thamrin, No.30, Rt03/Rw01, Kelurahan Lomanis, Kecamatan Cilacap Tengah, Kabupaten Cilacap",
        "hobbies": ["Gaming", "Music"],
        "is_married": False,
        "list_school": [
            {
                "name": "SD Negeri 01 Lomanis",
                "year_in": 2001,
                "year_out": 2006,
                "major": "null"
            },
            {
                "name": "SMP Negeri 3 Purbalingga",
                "year_in": 2006,
                "year_out": 2009,
                "major": "null"
            },
            {
                "name": "SMK YPT 1 Purbalingga",
                "year_in": 2009,
                "year_out": 2012,
                "major": "jurusan Teknik Fabrikasi Logam"
            },
            {
                "name": "Institut Teknologi Telkom Purwokerto",
                "year_in": 2015,
                "year_out": 2019,
                "major": "jurusan Teknik Informatika"
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
        "interest_in_coding": True
    }

    return biodata


print(get_biodata("Zaenury Dhany Wibowo", 25))
