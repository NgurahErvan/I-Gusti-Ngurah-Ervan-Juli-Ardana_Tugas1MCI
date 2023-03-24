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
### No2
```
SELECT nama, ukt FROM mahasiswa
WHERE ukt = (SELECT MAX(ukt) FROM mahasiswa)
ORDER BY ukt DESC, nama ASC
```
### No3
```
SELECT COUNT(*) AS Jumlah_Mahasiswa FROM mahasiswa
WHERE ipk >= 3.5 AND semester = 8
```
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
### No5
```
SELECT mahasiswa.nama, b.semester, b.ipk FROM (
	SELECT semester, MAX(ipk) as ipk FROM mahasiswa GROUP BY semester
) b
JOIN mahasiswa ON mahasiswa.semester = b.semester AND mahasiswa.ipk = b.ipk
ORDER BY b.semester ASC, mahasiswa.nama ASC
```
