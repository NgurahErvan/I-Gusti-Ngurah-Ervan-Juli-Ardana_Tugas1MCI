/* 1 */
SELECT nama, ukt FROM mahasiswa
WHERE ukt = (SELECT MAX(ukt) 
			 FROM mahasiswa)

/* 2 */
SELECT nama, ukt FROM mahasiswa
WHERE ukt = (SELECT MAX(ukt) FROM mahasiswa)
ORDER BY ukt DESC, nama ASC

/* 3 */
SELECT COUNT(*) AS Jumlah_Mahasiswa FROM mahasiswa
WHERE ipk >= 3.5 AND semester = 8

/* 4 */
SELECT nama, ukt,
CASE
	WHEN ukt <= 1000000 THEN 'A'
	WHEN ukt > 1000000 AND ukt <= 2000000 THEN 'B'
	ELSE 'C'
END AS Golongan
FROM mahasiswa


/* 5 */
SELECT mahasiswa.nama, b.semester, b.ipk FROM (
	SELECT semester, MAX(ipk) as ipk FROM mahasiswa GROUP BY semester
) b
JOIN mahasiswa ON mahasiswa.semester = b.semester AND mahasiswa.ipk = b.ipk
ORDER BY b.semester ASC, mahasiswa.nama ASC
