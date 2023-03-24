# TUGAS 1 MCI

***

## Identitas
Nama : I Gusti Ngurah Ervan Juli Ardana
NRP : 5025211205
---

### No1
```
SELECT nama, ukt FROM mahasiswa
WHERE ukt = (SELECT MAX(ukt) 
			 FROM mahasiswa)
```
![Screenshot (404)](https://user-images.githubusercontent.com/114007640/227573416-7afb40e5-50c9-4268-b5ee-f7be1a16b76f.png)

### No2
```
SELECT nama, ukt FROM mahasiswa
WHERE ukt = (SELECT MAX(ukt) FROM mahasiswa)
ORDER BY ukt DESC, nama ASC
```
![Screenshot (405)](https://user-images.githubusercontent.com/114007640/227573927-7ff47834-0715-4a02-8cec-63d9340d46b7.png)

### No3
```
SELECT COUNT(*) AS Jumlah_Mahasiswa FROM mahasiswa
WHERE ipk >= 3.5 AND semester = 8
```
![Screenshot (406)](https://user-images.githubusercontent.com/114007640/227574427-850b973e-7b8c-40ea-b26c-c3db45d5e5f9.png)

### No4
```
SELECT nama, ukt,
CASE
	WHEN ukt <= 1000000 THEN 'A'
	WHEN ukt > 1000000 AND ukt <= 2000000 THEN 'B'
	ELSE 'C'
END AS Golongan
FROM mahasiswa
```
![Screenshot (407)](https://user-images.githubusercontent.com/114007640/227574999-6b5f60fb-42ab-4bb6-a584-0b52fa1d3752.png)
![Screenshot (408)](https://user-images.githubusercontent.com/114007640/227575042-c9d601df-ddbe-49e8-9d4e-e9d381ff19d4.png)

### No5
```
SELECT mahasiswa.nama, b.semester, b.ipk FROM (
	SELECT semester, MAX(ipk) as ipk FROM mahasiswa GROUP BY semester
) b
JOIN mahasiswa ON mahasiswa.semester = b.semester AND mahasiswa.ipk = b.ipk
ORDER BY b.semester ASC, mahasiswa.nama ASC
```
![Screenshot (409)](https://user-images.githubusercontent.com/114007640/227575467-638ef489-7332-4c78-a043-b53c694a55b0.png)

