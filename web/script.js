// Mock dataset with data for IITs, NITs, and PSUs
const rankData = {
    "2023": {
        "CSE": {
            "IIT": {
                "General": [
                    { name: "IIT Bombay", opening: 1, closing: 40 },
                    { name: "IIT Delhi", opening: 10, closing: 50 },
                    { name: "IIT Madras", opening: 15, closing: 70 },
                    { name: "IIT Kanpur", opening: 20, closing: 75 },
                    { name: "IIT Kharagpur", opening: 35, closing: 80 },
                    { name: "IIT Roorkee", opening: 50, closing: 100 },
                    { name: "IIT Guwahati", opening: 60, closing: 130 },
                    { name: "IIT Hyderabad", opening: 90, closing: 150 }
                ],
                "OBC": [
                    { name: "IIT Bombay", opening: 40, closing: 350 },
                    { name: "IIT Delhi", opening: 70, closing: 380 },
                    { name: "IIT Madras", opening: 90, closing: 400 },
                    { name: "IIT Kanpur", opening: 100, closing: 410 },
                    { name: "IIT Kharagpur", opening: 120, closing: 450 },
                    { name: "IIT Roorkee", opening: 250, closing: 490 },
                    { name: "IIT Guwahati", opening: 140, closing: 520 },
                    { name: "IIT Hyderabad", opening: 150, closing: 550 }
                ],
                "EWS": [
                    { name: "IIT Bombay", opening: 60, closing: 190 },
                    { name: "IIT Delhi", opening: 70, closing: 190 },
                    { name: "IIT Madras", opening: 80, closing: 230 },
                    { name: "IIT Kanpur", opening: 90, closing: 250 },
                    { name: "IIT Kharagpur", opening: 100, closing: 280 },
                    { name: "IIT Roorkee", opening: 110, closing: 310 },
                    { name: "IIT Guwahati", opening: 130, closing: 350 },
                    { name: "IIT Hyderabad", opening: 150, closing: 380 }
                ],
                "SC": [
                    { name: "IIT Bombay", opening: 200, closing: 600 },
                    { name: "IIT Delhi", opening: 220, closing: 650 },
                    { name: "IIT Madras", opening: 250, closing: 690 },
                    { name: "IIT Kanpur", opening: 300, closing: 710 },
                    { name: "IIT Kharagpur", opening: 350, closing: 800 },
                    { name: "IIT Roorkee", opening: 400, closing: 850 },
                    { name: "IIT Guwahati", opening: 450, closing: 890 },
                    { name: "IIT Hyderabad", opening: 500, closing: 950 }
                ],
                "ST": [
                    { name: "IIT Bombay", opening: 400, closing: 900 },
                    { name: "IIT Delhi", opening: 450, closing: 1300 },
                    { name: "IIT Madras", opening: 500, closing: 1200 },
                    { name: "IIT Kanpur", opening: 550, closing: 1260 },
                    { name: "IIT Kharagpur", opening: 600, closing: 1290 },
                    { name: "IIT Roorkee", opening: 650, closing: 1310 },
                    { name: "IIT Guwahati", opening: 700, closing: 1370 },
                    { name: "IIT Hyderabad", opening: 750, closing: 1430 }
                ]
            },
            "NIT": {
                "General": [
                    { name: "NIT Trichy", opening: 300, closing: 1200 },
                    { name: "NIT Surathkal", opening: 350, closing: 1250 },
                    { name: "NIT Warangal", opening: 400, closing: 1300 },
                    { name: "NIT Calicut", opening: 450, closing: 1350 },
                    { name: "NIT Rourkela", opening: 500, closing: 1400 },
                    { name: "NIT Nagpur", opening: 550, closing: 1500 },
                    { name: "NIT Jaipur", opening: 600, closing: 1600 },
                    { name: "NIT Allahabad", opening: 650, closing: 1700 }
                ],
                "OBC": [
                    { name: "NIT Trichy", opening: 500, closing: 1800 },
                    { name: "NIT Surathkal", opening: 550, closing: 1850 },
                    { name: "NIT Warangal", opening: 600, closing: 1900 },
                    { name: "NIT Calicut", opening: 650, closing: 1950 },
                    { name: "NIT Rourkela", opening: 700, closing: 2000 },
                    { name: "NIT Nagpur", opening: 750, closing: 2100 },
                    { name: "NIT Jaipur", opening: 800, closing: 2200 },
                    { name: "NIT Allahabad", opening: 850, closing: 2300 }
                ],
                "EWS": [
                    { name: "NIT Trichy", opening: 400, closing: 1500 },
                    { name: "NIT Surathkal", opening: 450, closing: 1550 },
                    { name: "NIT Warangal", opening: 500, closing: 1600 },
                    { name: "NIT Calicut", opening: 550, closing: 1650 },
                    { name: "NIT Rourkela", opening: 600, closing: 1700 },
                    { name: "NIT Nagpur", opening: 650, closing: 1800 },
                    { name: "NIT Jaipur", opening: 700, closing: 1900 },
                    { name: "NIT Allahabad", opening: 750, closing: 2000 }
                ],
                "SC": [
                    { name: "NIT Trichy", opening: 800, closing: 3000 },
                    { name: "NIT Surathkal", opening: 850, closing: 3100 },
                    { name: "NIT Warangal", opening: 900, closing: 3200 },
                    { name: "NIT Calicut", opening: 950, closing: 3300 },
                    { name: "NIT Rourkela", opening: 1000, closing: 3400 },
                    { name: "NIT Nagpur", opening: 1050, closing: 3500 },
                    { name: "NIT Jaipur", opening: 1100, closing: 3600 },
                    { name: "NIT Allahabad", opening: 1150, closing: 3700 }
                ],
                "ST": [
                    { name: "NIT Trichy", opening: 1500, closing: 5000 },
                    { name: "NIT Surathkal", opening: 1600, closing: 5200 },
                    { name: "NIT Warangal", opening: 1700, closing: 5400 },
                    { name: "NIT Calicut", opening: 1800, closing: 5600 },
                    { name: "NIT Rourkela", opening: 1900, closing: 5800 },
                    { name: "NIT Nagpur", opening: 2000, closing: 6000 },
                    { name: "NIT Jaipur", opening: 2100, closing: 6200 },
                    { name: "NIT Allahabad", opening: 2200, closing: 6400 }
                ]
            },
            "PSU": {
                "General": [
                    { name: "ONGC", opening: 12, closing: 200 },
                    { name: "IOCL", opening: 18, closing: 250 },
                    { name: "BHEL", opening: 20, closing: 300 },
                    { name: "PowerGrid", opening: 45, closing: 350 },
                    { name: "NTPC", opening: 30, closing: 400 }
                ],
                "OBC": [
                    { name: "ONGC", opening: 15, closing: 300 },
                    { name: "IOCL", opening: 20, closing: 350 },
                    { name: "BHEL", opening: 25, closing: 400 },
                    { name: "PowerGrid", opening: 50, closing: 450 },
                    { name: "NTPC", opening: 35, closing: 500 }
                ],
                "EWS": [
                    { name: "ONGC", opening: 10, closing: 250 },
                    { name: "IOCL", opening: 20, closing: 300 },
                    { name: "BHEL", opening: 15, closing: 350 },
                    { name: "PowerGrid", opening: 40, closing: 400 },
                    { name: "NTPC", opening: 25, closing: 450 }
                ],
                "SC": [
                    { name: "ONGC", opening: 18, closing: 400 },
                    { name: "IOCL", opening: 22, closing: 450 },
                    { name: "BHEL", opening: 30, closing: 500 },
                    { name: "PowerGrid", opening: 55, closing: 550 },
                    { name: "NTPC", opening: 28, closing: 600 }
                ],
                "ST": [
                    { name: "ONGC", opening: 15, closing: 500 },
                    { name: "IOCL", opening: 22, closing: 550 },
                    { name: "BHEL", opening: 20, closing: 600 },
                    { name: "PowerGrid", opening: 45, closing: 650 },
                    { name: "NTPC", opening: 35, closing: 700 }
                ]
            }
        },
        // Add other branches similarly...
        "ECE": {
            "IIT": {
                "General": [
                    { name: "IIT Bombay", opening: 100, closing: 400 },
                    { name: "IIT Delhi", opening: 120, closing: 450 },
                    { name: "IIT Madras", opening: 140, closing: 480 },
                    { name: "IIT Kanpur", opening: 160, closing: 500 },
                    { name: "IIT Kharagpur", opening: 180, closing: 550 },
                    { name: "IIT Roorkee", opening: 200, closing: 600 },
                    { name: "IIT Guwahati", opening: 220, closing: 650 },
                    { name: "IIT Hyderabad", opening: 250, closing: 700 }
                ],
                "OBC": [
                    { name: "IIT Bombay", opening: 150, closing: 600 },
                    { name: "IIT Delhi", opening: 170, closing: 620 },
                    { name: "IIT Madras", opening: 190, closing: 650 },
                    { name: "IIT Kanpur", opening: 210, closing: 700 },
                    { name: "IIT Kharagpur", opening: 230, closing: 750 },
                    { name: "IIT Roorkee", opening: 250, closing: 800 },
                    { name: "IIT Guwahati", opening: 270, closing: 850 },
                    { name: "IIT Hyderabad", opening: 300, closing: 900 }
                ],
                "EWS": [
                    { name: "IIT Bombay", opening: 120, closing: 500 },
                    { name: "IIT Delhi", opening: 140, closing: 520 },
                    { name: "IIT Madras", opening: 160, closing: 550 },
                    { name: "IIT Kanpur", opening: 180, closing: 600 },
                    { name: "IIT Kharagpur", opening: 200, closing: 650 },
                    { name: "IIT Roorkee", opening: 220, closing: 700 },
                    { name: "IIT Guwahati", opening: 240, closing: 750 },
                    { name: "IIT Hyderabad", opening: 260, closing: 800 }
                ],
                "SC": [
                    { name: "IIT Bombay", opening: 400, closing: 1500 },
                    { name: "IIT Delhi", opening: 450, closing: 1550 },
                    { name: "IIT Madras", opening: 500, closing: 1600 },
                    { name: "IIT Kanpur", opening: 550, closing: 1700 },
                    { name: "IIT Kharagpur", opening: 600, closing: 1800 },
                    { name: "IIT Roorkee", opening: 650, closing: 1900 },
                    { name: "IIT Guwahati", opening: 700, closing: 2000 },
                    { name: "IIT Hyderabad", opening: 750, closing: 2100 }
                ],
                "ST": [
                    { name: "IIT Bombay", opening: 800, closing: 3000 },
                    { name: "IIT Delhi", opening: 850, closing: 3100 },
                    { name: "IIT Madras", opening: 900, closing: 3200 },
                    { name: "IIT Kanpur", opening: 950, closing: 3300 },
                    { name: "IIT Kharagpur", opening: 1000, closing: 3400 },
                    { name: "IIT Roorkee", opening: 1050, closing: 3500 },
                    { name: "IIT Guwahati", opening: 1100, closing: 3600 },
                    { name: "IIT Hyderabad", opening: 1150, closing: 3700 }
                ]
            },
            "NIT": {
                "General": [
                    { name: "NIT Trichy", opening: 500, closing: 2000 },
                    { name: "NIT Surathkal", opening: 550, closing: 2100 },
                    { name: "NIT Warangal", opening: 600, closing: 2200 },
                    { name: "NIT Calicut", opening: 650, closing: 2300 },
                    { name: "NIT Rourkela", opening: 700, closing: 2400 },
                    { name: "NIT Nagpur", opening: 750, closing: 2500 },
                    { name: "NIT Jaipur", opening: 800, closing: 2600 },
                    { name: "NIT Allahabad", opening: 850, closing: 2700 }
                ],
                "OBC": [
                    { name: "NIT Trichy", opening: 900, closing: 3000 },
                    { name: "NIT Surathkal", opening: 950, closing: 3100 },
                    { name: "NIT Warangal", opening: 1000, closing: 3200 },
                    { name: "NIT Calicut", opening: 1050, closing: 3300 },
                    { name: "NIT Rourkela", opening: 1100, closing: 3400 },
                    { name: "NIT Nagpur", opening: 1150, closing: 3500 },
                    { name: "NIT Jaipur", opening: 1200, closing: 3600 },
                    { name: "NIT Allahabad", opening: 1250, closing: 3700 }
                ],
                "EWS": [
                    { name: "NIT Trichy", opening: 800, closing: 2500 },
                    { name: "NIT Surathkal", opening: 850, closing: 2600 },
                    { name: "NIT Warangal", opening: 900, closing: 2700 },
                    { name: "NIT Calicut", opening: 950, closing: 2800 },
                    { name: "NIT Rourkela", opening: 1000, closing: 2900 },
                    { name: "NIT Nagpur", opening: 1050, closing: 3000 },
                    { name: "NIT Jaipur", opening: 1100, closing: 3100 },
                    { name: "NIT Allahabad", opening: 1150, closing: 3200 }
                ],
                "SC": [
                    { name: "NIT Trichy", opening: 1500, closing: 4500 },
                    { name: "NIT Surathkal", opening: 1600, closing: 4600 },
                    { name: "NIT Warangal", opening: 1700, closing: 4700 },
                    { name: "NIT Calicut", opening: 1800, closing: 4800 },
                    { name: "NIT Rourkela", opening: 1900, closing: 4900 },
                    { name: "NIT Nagpur", opening: 2000, closing: 5000 },
                    { name: "NIT Jaipur", opening: 2100, closing: 5100 },
                    { name: "NIT Allahabad", opening: 2200, closing: 5200 }
                ],
                "ST": [
                    { name: "NIT Trichy", opening: 3000, closing: 7000 },
                    { name: "NIT Surathkal", opening: 3100, closing: 7200 },
                    { name: "NIT Warangal", opening: 3200, closing: 7400 },
                    { name: "NIT Calicut", opening: 3300, closing: 7600 },
                    { name: "NIT Rourkela", opening: 3400, closing: 7800 },
                    { name: "NIT Nagpur", opening: 3500, closing: 8000 },
                    { name: "NIT Jaipur", opening: 3600, closing: 8200 },
                    { name: "NIT Allahabad", opening: 3700, closing: 8400 }
                ]
            },
            "PSU": {
                "General": [
                    { name: "ONGC", opening: 1, closing: 150 },
                    { name: "IOCL", opening: 1, closing: 200 },
                    { name: "BHEL", opening: 1, closing: 250 },
                    { name: "PowerGrid", opening: 1, closing: 300 },
                    { name: "NTPC", opening: 1, closing: 350 }
                ],
                "OBC": [
                    { name: "ONGC", opening: 1, closing: 200 },
                    { name: "IOCL", opening: 1, closing: 250 },
                    { name: "BHEL", opening: 1, closing: 300 },
                    { name: "PowerGrid", opening: 1, closing: 350 },
                    { name: "NTPC", opening: 1, closing: 400 }
                ],
                "EWS": [
                    { name: "ONGC", opening: 1, closing: 180 },
                    { name: "IOCL", opening: 1, closing: 230 },
                    { name: "BHEL", opening: 1, closing: 280 },
                    { name: "PowerGrid", opening: 1, closing: 320 },
                    { name: "NTPC", opening: 1, closing: 370 }
                ],
                "SC": [
                    { name: "ONGC", opening: 1, closing: 250 },
                    { name: "IOCL", opening: 1, closing: 300 },
                    { name: "BHEL", opening: 1, closing: 350 },
                    { name: "PowerGrid", opening: 1, closing: 400 },
                    { name: "NTPC", opening: 1, closing: 450 }
                ],
                "ST": [
                    { name: "ONGC", opening: 1, closing: 350 },
                    { name: "IOCL", opening: 1, closing: 400 },
                    { name: "BHEL", opening: 1, closing: 450 },
                    { name: "PowerGrid", opening: 1, closing: 500 },
                    { name: "NTPC", opening: 1, closing: 550 }
                ]
            }
        },
        "ME": {
        "IIT": {
            "General": [
                { name: "IIT Bombay", opening: 5, closing: 80 },
                { name: "IIT Delhi", opening: 10, closing: 90 },
                { name: "IIT Kanpur", opening: 15, closing: 120 },
                { name: "IIT Madras", opening: 20, closing: 150 },
                { name: "IIT Kharagpur", opening: 25, closing: 180 },
                { name: "IIT Roorkee", opening: 30, closing: 200 },
                { name: "IIT Guwahati", opening: 35, closing: 210 },
                { name: "IIT BHU", opening: 40, closing: 230 }
            ],
            "OBC": [
                { name: "IIT Bombay", opening: 50, closing: 250 },
                { name: "IIT Delhi", opening: 60, closing: 270 },
                { name: "IIT Kanpur", opening: 70, closing: 300 },
                { name: "IIT Madras", opening: 80, closing: 320 },
                { name: "IIT Kharagpur", opening: 90, closing: 340 },
                { name: "IIT Roorkee", opening: 100, closing: 360 },
                { name: "IIT Guwahati", opening: 110, closing: 380 },
                { name: "IIT BHU", opening: 120, closing: 400 }
            ],
            "EWS": [
                { name: "IIT Bombay", opening: 60, closing: 270 },
                { name: "IIT Delhi", opening: 70, closing: 300 },
                { name: "IIT Kanpur", opening: 80, closing: 320 },
                { name: "IIT Madras", opening: 90, closing: 340 },
                { name: "IIT Kharagpur", opening: 100, closing: 360 },
                { name: "IIT Roorkee", opening: 110, closing: 380 },
                { name: "IIT Guwahati", opening: 120, closing: 400 },
                { name: "IIT BHU", opening: 130, closing: 420 }
            ],
            "SC": [
                { name: "IIT Bombay", opening: 200, closing: 500 },
                { name: "IIT Delhi", opening: 220, closing: 520 },
                { name: "IIT Kanpur", opening: 240, closing: 540 },
                { name: "IIT Madras", opening: 260, closing: 560 },
                { name: "IIT Kharagpur", opening: 280, closing: 580 },
                { name: "IIT Roorkee", opening: 300, closing: 600 },
                { name: "IIT Guwahati", opening: 320, closing: 620 },
                { name: "IIT BHU", opening: 340, closing: 640 }
            ],
            "ST": [
                { name: "IIT Bombay", opening: 400, closing: 800 },
                { name: "IIT Delhi", opening: 420, closing: 820 },
                { name: "IIT Kanpur", opening: 440, closing: 840 },
                { name: "IIT Madras", opening: 460, closing: 860 },
                { name: "IIT Kharagpur", opening: 480, closing: 880 },
                { name: "IIT Roorkee", opening: 500, closing: 900 },
                { name: "IIT Guwahati", opening: 520, closing: 920 },
                { name: "IIT BHU", opening: 540, closing: 940 }
            ]
        },
        "NIT": {
            "General": [
                { name: "NIT Trichy", opening: 100, closing: 300 },
                { name: "NIT Warangal", opening: 120, closing: 350 },
                { name: "NIT Surathkal", opening: 140, closing: 400 },
                { name: "NIT Rourkela", opening: 160, closing: 450 },
                { name: "NIT Calicut", opening: 180, closing: 500 },
                { name: "NIT Durgapur", opening: 200, closing: 550 },
                { name: "NIT Kurukshetra", opening: 220, closing: 600 },
                { name: "NIT Jamshedpur", opening: 240, closing: 650 }
            ],
            "OBC": [
                { name: "NIT Trichy", opening: 200, closing: 400 },
                { name: "NIT Warangal", opening: 220, closing: 450 },
                { name: "NIT Surathkal", opening: 240, closing: 500 },
                { name: "NIT Rourkela", opening: 260, closing: 550 },
                { name: "NIT Calicut", opening: 280, closing: 600 },
                { name: "NIT Durgapur", opening: 300, closing: 650 },
                { name: "NIT Kurukshetra", opening: 320, closing: 700 },
                { name: "NIT Jamshedpur", opening: 340, closing: 750 }
            ],
            "EWS": [
                { name: "NIT Trichy", opening: 220, closing: 420 },
                { name: "NIT Warangal", opening: 240, closing: 470 },
                { name: "NIT Surathkal", opening: 260, closing: 520 },
                { name: "NIT Rourkela", opening: 280, closing: 570 },
                { name: "NIT Calicut", opening: 300, closing: 620 },
                { name: "NIT Durgapur", opening: 320, closing: 670 },
                { name: "NIT Kurukshetra", opening: 340, closing: 720 },
                { name: "NIT Jamshedpur", opening: 360, closing: 770 }
            ],
            "SC": [
                { name: "NIT Trichy", opening: 400, closing: 700 },
                { name: "NIT Warangal", opening: 420, closing: 750 },
                { name: "NIT Surathkal", opening: 440, closing: 800 },
                { name: "NIT Rourkela", opening: 460, closing: 850 },
                { name: "NIT Calicut", opening: 480, closing: 900 },
                { name: "NIT Durgapur", opening: 500, closing: 950 },
                { name: "NIT Kurukshetra", opening: 520, closing: 1000 },
                { name: "NIT Jamshedpur", opening: 540, closing: 1050 }
            ],
            "ST": [
                { name: "NIT Trichy", opening: 600, closing: 900 },
                { name: "NIT Warangal", opening: 620, closing: 950 },
                { name: "NIT Surathkal", opening: 640, closing: 1000 },
                { name: "NIT Rourkela", opening: 660, closing: 1050 },
                { name: "NIT Calicut", opening: 680, closing: 1100 },
                { name: "NIT Durgapur", opening: 700, closing: 1150 },
                { name: "NIT Kurukshetra", opening: 720, closing: 1200 },
                { name: "NIT Jamshedpur", opening: 740, closing: 1250 }
            ]
        },
        "PSU": {
            "General": [
                { name: "IOCL", opening: 20, closing: 80 },
                { name: "BPCL", opening: 30, closing: 100 },
                { name: "HPCL", opening: 50, closing: 120 },
                { name: "NTPC", opening: 60, closing: 140 },
                { name: "BHEL", opening: 80, closing: 160 },
                { name: "GAIL", opening: 100, closing: 180 },
                { name: "Indian Oil", opening: 120, closing: 200 },
                { name: "Coal India", opening: 140, closing: 220 }
            ],
            "OBC": [
                { name: "IOCL", opening: 100, closing: 200 },
                { name: "BPCL", opening: 120, closing: 220 },
                { name: "HPCL", opening: 140, closing: 240 },
                { name: "NTPC", opening: 160, closing: 260 },
                { name: "BHEL", opening: 180, closing: 280 },
                { name: "GAIL", opening: 200, closing: 300 },
                { name: "Indian Oil", opening: 220, closing: 320 },
                { name: "Coal India", opening: 240, closing: 340 }
            ],
            "EWS": [
                { name: "IOCL", opening: 120, closing: 220 },
                { name: "BPCL", opening: 140, closing: 240 },
                { name: "HPCL", opening: 160, closing: 260 },
                { name: "NTPC", opening: 180, closing: 280 },
                { name: "BHEL", opening: 200, closing: 300 },
                { name: "GAIL", opening: 220, closing: 320 },
                { name: "Indian Oil", opening: 240, closing: 340 },
                { name: "Coal India", opening: 260, closing: 360 }
            ],
            "SC": [
                { name: "IOCL", opening: 200, closing: 400 },
                { name: "BPCL", opening: 220, closing: 420 },
                { name: "HPCL", opening: 240, closing: 440 },
                { name: "NTPC", opening: 260, closing: 460 },
                { name: "BHEL", opening: 280, closing: 480 },
                { name: "GAIL", opening: 300, closing: 500 },
                { name: "Indian Oil", opening: 320, closing: 520 },
                { name: "Coal India", opening: 340, closing: 540 }
            ],
            "ST": [
                { name: "IOCL", opening: 300, closing: 500 },
                { name: "BPCL", opening: 320, closing: 520 },
                { name: "HPCL", opening: 340, closing: 540 },
                { name: "NTPC", opening: 360, closing: 560 },
                { name: "BHEL", opening: 380, closing: 580 },
                { name: "GAIL", opening: 400, closing: 600 },
                { name: "Indian Oil", opening: 420, closing: 620 },
                { name: "Coal India", opening: 440, closing: 640 }
            ]
        }
    },
    "CE": {
        "IIT": {
            "General": [
                { name: "IIT Bombay", opening: 50, closing: 150 },
                { name: "IIT Delhi", opening: 60, closing: 180 },
                { name: "IIT Kanpur", opening: 80, closing: 200 },
                { name: "IIT Madras", opening: 100, closing: 220 },
                { name: "IIT Kharagpur", opening: 120, closing: 240 },
                { name: "IIT Roorkee", opening: 140, closing: 270 },
                { name: "IIT BHU", opening: 160, closing: 300 },
                { name: "IIT Gandhinagar", opening: 180, closing: 320 }
            ],
            "OBC": [
                { name: "IIT Bombay", opening: 150, closing: 250 },
                { name: "IIT Delhi", opening: 170, closing: 280 },
                { name: "IIT Kanpur", opening: 190, closing: 300 },
                { name: "IIT Madras", opening: 210, closing: 320 },
                { name: "IIT Kharagpur", opening: 230, closing: 340 },
                { name: "IIT Roorkee", opening: 250, closing: 360 },
                { name: "IIT BHU", opening: 270, closing: 380 },
                { name: "IIT Gandhinagar", opening: 290, closing: 400 }
            ],
            "EWS": [
                { name: "IIT Bombay", opening: 180, closing: 280 },
                { name: "IIT Delhi", opening: 200, closing: 300 },
                { name: "IIT Kanpur", opening: 220, closing: 320 },
                { name: "IIT Madras", opening: 240, closing: 340 },
                { name: "IIT Kharagpur", opening: 260, closing: 360 },
                { name: "IIT Roorkee", opening: 280, closing: 380 },
                { name: "IIT BHU", opening: 300, closing: 400 },
                { name: "IIT Gandhinagar", opening: 320, closing: 420 }
            ],
            "SC": [
                { name: "IIT Bombay", opening: 300, closing: 500 },
                { name: "IIT Delhi", opening: 320, closing: 520 },
                { name: "IIT Kanpur", opening: 340, closing: 540 },
                { name: "IIT Madras", opening: 360, closing: 560 },
                { name: "IIT Kharagpur", opening: 380, closing: 580 },
                { name: "IIT Roorkee", opening: 400, closing: 600 },
                { name: "IIT BHU", opening: 420, closing: 620 },
                { name: "IIT Gandhinagar", opening: 440, closing: 640 }
            ],
            "ST": [
                { name: "IIT Bombay", opening: 500, closing: 700 },
                { name: "IIT Delhi", opening: 520, closing: 740 },
                { name: "IIT Kanpur", opening: 540, closing: 760 },
                { name: "IIT Madras", opening: 560, closing: 780 },
                { name: "IIT Kharagpur", opening: 580, closing: 800 },
                { name: "IIT Roorkee", opening: 600, closing: 820 },
                { name: "IIT BHU", opening: 620, closing: 840 },
                { name: "IIT Gandhinagar", opening: 640, closing: 860 }
            ]
        },
        "NIT": {
            "General": [
                { name: "NIT Trichy", opening: 500, closing: 700 },
                { name: "NIT Surathkal", opening: 600, closing: 800 },
                { name: "NIT Warangal", opening: 700, closing: 900 },
                { name: "NIT Kurukshetra", opening: 800, closing: 1000 },
                { name: "NIT Calicut", opening: 900, closing: 1100 },
                { name: "NIT Durgapur", opening: 1000, closing: 1200 },
                { name: "NIT Jaipur", opening: 1100, closing: 1300 },
                { name: "NIT Rourkela", opening: 1200, closing: 1400 }
            ],
            "OBC": [
                { name: "NIT Trichy", opening: 700, closing: 900 },
                { name: "NIT Surathkal", opening: 800, closing: 1000 },
                { name: "NIT Warangal", opening: 900, closing: 1100 },
                { name: "NIT Kurukshetra", opening: 1000, closing: 1200 },
                { name: "NIT Calicut", opening: 1100, closing: 1300 },
                { name: "NIT Durgapur", opening: 1200, closing: 1400 },
                { name: "NIT Jaipur", opening: 1300, closing: 1500 },
                { name: "NIT Rourkela", opening: 1400, closing: 1600 }
            ],
            "EWS": [
                { name: "NIT Trichy", opening: 800, closing: 1000 },
                { name: "NIT Surathkal", opening: 900, closing: 1100 },
                { name: "NIT Warangal", opening: 1000, closing: 1200 },
                { name: "NIT Kurukshetra", opening: 1100, closing: 1300 },
                { name: "NIT Calicut", opening: 1200, closing: 1400 },
                { name: "NIT Durgapur", opening: 1300, closing: 1500 },
                { name: "NIT Jaipur", opening: 1400, closing: 1600 },
                { name: "NIT Rourkela", opening: 1500, closing: 1700 }
            ],
            "SC": [
                { name: "NIT Trichy", opening: 1000, closing: 1200 },
                { name: "NIT Surathkal", opening: 1100, closing: 1300 },
                { name: "NIT Warangal", opening: 1200, closing: 1400 },
                { name: "NIT Kurukshetra", opening: 1300, closing: 1500 },
                { name: "NIT Calicut", opening: 1400, closing: 1600 },
                { name: "NIT Durgapur", opening: 1500, closing: 1700 },
                { name: "NIT Jaipur", opening: 1600, closing: 1800 },
                { name: "NIT Rourkela", opening: 1700, closing: 1900 }
            ],
            "ST": [
                { name: "NIT Trichy", opening: 1500, closing: 1700 },
                { name: "NIT Surathkal", opening: 1600, closing: 1800 },
                { name: "NIT Warangal", opening: 1700, closing: 1900 },
                { name: "NIT Kurukshetra", opening: 1800, closing: 2000 },
                { name: "NIT Calicut", opening: 1900, closing: 2100 },
                { name: "NIT Durgapur", opening: 2000, closing: 2200 },
                { name: "NIT Jaipur", opening: 2100, closing: 2300 },
                { name: "NIT Rourkela", opening: 2200, closing: 2400 }
            ]
        },
        "PSU": {
            "General": [
                { name: "NTPC", opening: 100, closing: 300 },
                { name: "BHEL", opening: 150, closing: 350 },
                { name: "IOCL", opening: 200, closing: 400 },
                { name: "HPCL", opening: 250, closing: 450 },
                { name: "GAIL", opening: 300, closing: 500 },
                { name: "SAIL", opening: 350, closing: 550 },
                { name: "PGCIL", opening: 400, closing: 600 },
                { name: "Indian Oil Corp", opening: 450, closing: 650 }
            ],
            "OBC": [
                { name: "NTPC", opening: 300, closing: 500 },
                { name: "BHEL", opening: 350, closing: 550 },
                { name: "IOCL", opening: 400, closing: 600 },
                { name: "HPCL", opening: 450, closing: 650 },
                { name: "GAIL", opening: 500, closing: 700 },
                { name: "SAIL", opening: 550, closing: 750 },
                { name: "PGCIL", opening: 600, closing: 800 },
                { name: "Indian Oil Corp", opening: 650, closing: 850 }
            ],
            "EWS": [
                { name: "NTPC", opening: 350, closing: 550 },
                { name: "BHEL", opening: 400, closing: 600 },
                { name: "IOCL", opening: 450, closing: 650 },
                { name: "HPCL", opening: 500, closing: 700 },
                { name: "GAIL", opening: 550, closing: 750 },
                { name: "SAIL", opening: 600, closing: 800 },
                { name: "PGCIL", opening: 650, closing: 850 },
                { name: "Indian Oil Corp", opening: 700, closing: 900 }
            ],
            "SC": [
                { name: "NTPC", opening: 500, closing: 700 },
                { name: "BHEL", opening: 550, closing: 750 },
                { name: "IOCL", opening: 600, closing: 800 },
                { name: "HPCL", opening: 650, closing: 850 },
                { name: "GAIL", opening: 700, closing: 900 },
                { name: "SAIL", opening: 750, closing: 950 },
                { name: "PGCIL", opening: 800, closing: 1000 },
                { name: "Indian Oil Corp", opening: 850, closing: 1050 }
            ],
            "ST": [
                { name: "NTPC", opening: 700, closing: 900 },
                { name: "BHEL", opening: 750, closing: 950 },
                { name: "IOCL", opening: 800, closing: 1000 },
                { name: "HPCL", opening: 850, closing: 1050 },
                { name: "GAIL", opening: 900, closing: 1100 },
                { name: "SAIL", opening: 950, closing: 1150 },
                { name: "PGCIL", opening: 1000, closing: 1200 },
                { name: "Indian Oil Corp", opening: 1050, closing: 1250 }
            ]
        }
    },
    "EE": {
        "IIT": {
            "General": [
                { name: "IIT Bombay", opening: 100, closing: 200 },
                { name: "IIT Delhi", opening: 150, closing: 250 },
                { name: "IIT Kanpur", opening: 200, closing: 300 },
                { name: "IIT Kharagpur", opening: 250, closing: 350 },
                { name: "IIT Madras", opening: 300, closing: 400 },
                { name: "IIT Roorkee", opening: 350, closing: 450 },
                { name: "IIT Guwahati", opening: 400, closing: 500 },
                { name: "IIT BHU Varanasi", opening: 450, closing: 550 }
            ],
            "OBC": [
                { name: "IIT Bombay", opening: 200, closing: 300 },
                { name: "IIT Delhi", opening: 250, closing: 350 },
                { name: "IIT Kanpur", opening: 300, closing: 400 },
                { name: "IIT Kharagpur", opening: 350, closing: 450 },
                { name: "IIT Madras", opening: 400, closing: 500 },
                { name: "IIT Roorkee", opening: 450, closing: 550 },
                { name: "IIT Guwahati", opening: 500, closing: 600 },
                { name: "IIT BHU Varanasi", opening: 550, closing: 650 }
            ],
            "EWS": [
                { name: "IIT Bombay", opening: 300, closing: 400 },
                { name: "IIT Delhi", opening: 350, closing: 450 },
                { name: "IIT Kanpur", opening: 400, closing: 500 },
                { name: "IIT Kharagpur", opening: 450, closing: 550 },
                { name: "IIT Madras", opening: 500, closing: 600 },
                { name: "IIT Roorkee", opening: 550, closing: 650 },
                { name: "IIT Guwahati", opening: 600, closing: 700 },
                { name: "IIT BHU Varanasi", opening: 650, closing: 750 }
            ],
            "SC": [
                { name: "IIT Bombay", opening: 400, closing: 500 },
                { name: "IIT Delhi", opening: 450, closing: 550 },
                { name: "IIT Kanpur", opening: 500, closing: 600 },
                { name: "IIT Kharagpur", opening: 550, closing: 650 },
                { name: "IIT Madras", opening: 600, closing: 700 },
                { name: "IIT Roorkee", opening: 650, closing: 750 },
                { name: "IIT Guwahati", opening: 700, closing: 800 },
                { name: "IIT BHU Varanasi", opening: 750, closing: 850 }
            ],
            "ST": [
                { name: "IIT Bombay", opening: 500, closing: 600 },
                { name: "IIT Delhi", opening: 550, closing: 650 },
                { name: "IIT Kanpur", opening: 600, closing: 700 },
                { name: "IIT Kharagpur", opening: 650, closing: 750 },
                { name: "IIT Madras", opening: 700, closing: 800 },
                { name: "IIT Roorkee", opening: 750, closing: 850 },
                { name: "IIT Guwahati", opening: 800, closing: 900 },
                { name: "IIT BHU Varanasi", opening: 850, closing: 950 }
            ]
        },
        "NIT": {
            "General": [
                { name: "NIT Trichy", opening: 500, closing: 700 },
                { name: "NIT Surathkal", opening: 600, closing: 800 },
                { name: "NIT Warangal", opening: 700, closing: 900 },
                { name: "NIT Calicut", opening: 800, closing: 1000 },
                { name: "NIT Rourkela", opening: 900, closing: 1100 },
                { name: "NIT Durgapur", opening: 1000, closing: 1200 },
                { name: "NIT Kurukshetra", opening: 1100, closing: 1300 },
                { name: "NIT Jaipur", opening: 1200, closing: 1400 }
            ],
            "OBC": [
                { name: "NIT Trichy", opening: 700, closing: 900 },
                { name: "NIT Surathkal", opening: 800, closing: 1000 },
                { name: "NIT Warangal", opening: 900, closing: 1100 },
                { name: "NIT Calicut", opening: 1000, closing: 1200 },
                { name: "NIT Rourkela", opening: 1100, closing: 1300 },
                { name: "NIT Durgapur", opening: 1200, closing: 1400 },
                { name: "NIT Kurukshetra", opening: 1300, closing: 1500 },
                { name: "NIT Jaipur", opening: 1400, closing: 1600 }
            ],
            "EWS": [
                { name: "NIT Trichy", opening: 800, closing: 1000 },
                { name: "NIT Surathkal", opening: 900, closing: 1100 },
                { name: "NIT Warangal", opening: 1000, closing: 1200 },
                { name: "NIT Calicut", opening: 1100, closing: 1300 },
                { name: "NIT Rourkela", opening: 1200, closing: 1400 },
                { name: "NIT Durgapur", opening: 1300, closing: 1500 },
                { name: "NIT Kurukshetra", opening: 1400, closing: 1600 },
                { name: "NIT Jaipur", opening: 1500, closing: 1700 }
            ],
            "SC": [
                { name: "NIT Trichy", opening: 900, closing: 1100 },
                { name: "NIT Surathkal", opening: 1000, closing: 1200 },
                { name: "NIT Warangal", opening: 1100, closing: 1300 },
                { name: "NIT Calicut", opening: 1200, closing: 1400 },
                { name: "NIT Rourkela", opening: 1300, closing: 1500 },
                { name: "NIT Durgapur", opening: 1400, closing: 1600 },
                { name: "NIT Kurukshetra", opening: 1500, closing: 1700 },
                { name: "NIT Jaipur", opening: 1600, closing: 1800 }
            ],
            "ST": [
                { name: "NIT Trichy", opening: 1100, closing: 1300 },
                { name: "NIT Surathkal", opening: 1200, closing: 1400 },
                { name: "NIT Warangal", opening: 1300, closing: 1500 },
                { name: "NIT Calicut", opening: 1400, closing: 1600 },
                { name: "NIT Rourkela", opening: 1500, closing: 1700 },
                { name: "NIT Durgapur", opening: 1600, closing: 1800 },
                { name: "NIT Kurukshetra", opening: 1700, closing: 1900 },
                { name: "NIT Jaipur", opening: 1800, closing: 2000 }
            ]
        },
        "PSU": {
            "General": [
                { name: "NTPC", opening: 100, closing: 200 },
                { name: "Power Grid Corporation", opening: 150, closing: 250 },
                { name: "BHEL", opening: 200, closing: 300 },
                { name: "IOCL", opening: 250, closing: 350 },
                { name: "GAIL", opening: 300, closing: 400 },
                { name: "NHPC", opening: 350, closing: 450 },
                { name: "BPCL", opening: 400, closing: 500 },
                { name: "Coal India Limited", opening: 450, closing: 550 }
            ],
            "OBC": [
                { name: "NTPC", opening: 200, closing: 300 },
                { name: "Power Grid Corporation", opening: 250, closing: 350 },
                { name: "BHEL", opening: 300, closing: 400 },
                { name: "IOCL", opening: 350, closing: 450 },
                { name: "GAIL", opening: 400, closing: 500 },
                { name: "NHPC", opening: 450, closing: 550 },
                { name: "BPCL", opening: 500, closing: 600 },
                { name: "Coal India Limited", opening: 550, closing: 650 }
            ],
            "EWS": [
                { name: "NTPC", opening: 300, closing: 400 },
                { name: "Power Grid Corporation", opening: 350, closing: 450 },
                { name: "BHEL", opening: 400, closing: 500 },
                { name: "IOCL", opening: 450, closing: 550 },
                { name: "GAIL", opening: 500, closing: 600 },
                { name: "NHPC", opening: 550, closing: 650 },
                { name: "BPCL", opening: 600, closing: 700 },
                { name: "Coal India Limited", opening: 650, closing: 750 }
            ],
            "SC": [
                { name: "NTPC", opening: 400, closing: 500 },
                { name: "Power Grid Corporation", opening: 450, closing: 550 },
                { name: "BHEL", opening: 500, closing: 600 },
                { name: "IOCL", opening: 550, closing: 650 },
                { name: "GAIL", opening: 600, closing: 700 },
                { name: "NHPC", opening: 650, closing: 750 },
                { name: "BPCL", opening: 700, closing: 800 },
                { name: "Coal India Limited", opening: 750, closing: 850 }
            ],
            "ST": [
                { name: "NTPC", opening: 500, closing: 600 },
                { name: "Power Grid Corporation", opening: 550, closing: 650 },
                { name: "BHEL", opening: 600, closing: 700 },
                { name: "IOCL", opening: 650, closing: 750 },
                { name: "GAIL", opening: 700, closing: 800 },
                { name: "NHPC", opening: 750, closing: 850 },
                { name: "BPCL", opening: 800, closing: 900 },
                { name: "Coal India Limited", opening: 850, closing: 950 }
            ]
        }
    }
    },
    "2022": {
        // Add similar data structure for 2022
        "CSE": {
        "IIT": {
            "General": [
                { name: "IIT Bombay", opening: 1, closing: 60 },
                { name: "IIT Delhi", opening: 10, closing: 70 },
                { name: "IIT Kanpur", opening: 20, closing: 100 },
                { name: "IIT Madras", opening: 30, closing: 110 },
                { name: "IIT Kharagpur", opening: 40, closing: 120 },
                { name: "IIT Roorkee", opening: 50, closing: 150 },
                { name: "IIT Guwahati", opening: 70, closing: 180 },
                { name: "IIT BHU", opening: 90, closing: 200 }
            ],
            "OBC": [
                { name: "IIT Bombay", opening: 50, closing: 200 },
                { name: "IIT Delhi", opening: 60, closing: 210 },
                { name: "IIT Kanpur", opening: 80, closing: 230 },
                { name: "IIT Madras", opening: 100, closing: 250 },
                { name: "IIT Kharagpur", opening: 120, closing: 280 },
                { name: "IIT Roorkee", opening: 150, closing: 300 },
                { name: "IIT Guwahati", opening: 180, closing: 330 },
                { name: "IIT BHU", opening: 200, closing: 350 }
            ],
            "EWS": [
                { name: "IIT Bombay", opening: 70, closing: 210 },
                { name: "IIT Delhi", opening: 80, closing: 220 },
                { name: "IIT Kanpur", opening: 100, closing: 250 },
                { name: "IIT Madras", opening: 120, closing: 270 },
                { name: "IIT Kharagpur", opening: 140, closing: 290 },
                { name: "IIT Roorkee", opening: 170, closing: 320 },
                { name: "IIT Guwahati", opening: 200, closing: 350 },
                { name: "IIT BHU", opening: 230, closing: 380 }
            ],
            "SC": [
                { name: "IIT Bombay", opening: 150, closing: 500 },
                { name: "IIT Delhi", opening: 180, closing: 550 },
                { name: "IIT Kanpur", opening: 200, closing: 600 },
                { name: "IIT Madras", opening: 250, closing: 650 },
                { name: "IIT Kharagpur", opening: 300, closing: 700 },
                { name: "IIT Roorkee", opening: 350, closing: 750 },
                { name: "IIT Guwahati", opening: 400, closing: 800 },
                { name: "IIT BHU", opening: 450, closing: 850 }
            ],
            "ST": [
                { name: "IIT Bombay", opening: 400, closing: 900 },
                { name: "IIT Delhi", opening: 450, closing: 950 },
                { name: "IIT Kanpur", opening: 500, closing: 1000 },
                { name: "IIT Madras", opening: 550, closing: 1050 },
                { name: "IIT Kharagpur", opening: 600, closing: 1100 },
                { name: "IIT Roorkee", opening: 650, closing: 1150 },
                { name: "IIT Guwahati", opening: 700, closing: 1200 },
                { name: "IIT BHU", opening: 750, closing: 1250 }
            ]
        },
        "NIT": {
            "General": [
                { name: "NIT Trichy", opening: 120, closing: 350 },
                { name: "NIT Surathkal", opening: 130, closing: 370 },
                { name: "NIT Warangal", opening: 140, closing: 380 },
                { name: "NIT Calicut", opening: 150, closing: 400 },
                { name: "NIT Rourkela", opening: 160, closing: 420 },
                { name: "NIT Allahabad", opening: 170, closing: 450 },
                { name: "NIT Jaipur", opening: 180, closing: 500 },
                { name: "NIT Nagpur", opening: 200, closing: 550 }
            ],
            "OBC": [
                { name: "NIT Trichy", opening: 200, closing: 550 },
                { name: "NIT Surathkal", opening: 220, closing: 580 },
                { name: "NIT Warangal", opening: 230, closing: 600 },
                { name: "NIT Calicut", opening: 250, closing: 630 },
                { name: "NIT Rourkela", opening: 270, closing: 650 },
                { name: "NIT Allahabad", opening: 290, closing: 700 },
                { name: "NIT Jaipur", opening: 310, closing: 750 },
                { name: "NIT Nagpur", opening: 330, closing: 800 }
            ],
            "EWS": [
                { name: "NIT Trichy", opening: 300, closing: 650 },
                { name: "NIT Surathkal", opening: 320, closing: 680 },
                { name: "NIT Warangal", opening: 350, closing: 700 },
                { name: "NIT Calicut", opening: 370, closing: 730 },
                { name: "NIT Rourkela", opening: 400, closing: 750 },
                { name: "NIT Allahabad", opening: 420, closing: 780 },
                { name: "NIT Jaipur", opening: 450, closing: 800 },
                { name: "NIT Nagpur", opening: 470, closing: 850 }
            ],
            "SC": [
                { name: "NIT Trichy", opening: 400, closing: 1000 },
                { name: "NIT Surathkal", opening: 450, closing: 1050 },
                { name: "NIT Warangal", opening: 500, closing: 1100 },
                { name: "NIT Calicut", opening: 550, closing: 1150 },
                { name: "NIT Rourkela", opening: 600, closing: 1200 },
                { name: "NIT Allahabad", opening: 650, closing: 1250 },
                { name: "NIT Jaipur", opening: 700, closing: 1300 },
                { name: "NIT Nagpur", opening: 750, closing: 1350 }
            ],
            "ST": [
                { name: "NIT Trichy", opening: 600, closing: 1500 },
                { name: "NIT Surathkal", opening: 650, closing: 1550 },
                { name: "NIT Warangal", opening: 700, closing: 1600 },
                { name: "NIT Calicut", opening: 750, closing: 1650 },
                { name: "NIT Rourkela", opening: 800, closing: 1700 },
                { name: "NIT Allahabad", opening: 850, closing: 1750 },
                { name: "NIT Jaipur", opening: 900, closing: 1800 },
                { name: "NIT Nagpur", opening: 950, closing: 1850 }
            ]
        },
        "PSU": {
            "General": [
                { name: "BEL", opening: 9, closing: 150 },
                { name: "IOCL", opening: 14, closing: 170 },
                { name: "PGCIL", opening: 20, closing: 200 },
                { name: "ONGC", opening: 15, closing: 350 },
                { name: "NTPC", opening: 24, closing: 300 },
                { name: "HPCL", opening: 30, closing: 350 }
            ],
            "OBC": [
                { name: "BEL", opening: 15, closing: 250 },
                { name: "IOCL", opening: 20, closing: 240 },
                { name: "PGCIL", opening: 25, closing: 300 },
                { name: "ONGC", opening: 27, closing: 350 },
                { name: "NTPC", opening: 20, closing: 470 },
                { name: "HPCL", opening: 35, closing: 460 }
            ],
            "EWS": [
                { name: "BEL", opening: 15, closing: 200 },
                { name: "IOCL", opening: 10, closing: 220 },
                { name: "PGCIL", opening: 30, closing: 310 },
                { name: "ONGC", opening: 25, closing: 390 },
                { name: "NTPC", opening: 40, closing: 480 },
                { name: "HPCL", opening: 45, closing: 500 }
            ],
            "SC": [
                { name: "BEL", opening: 5, closing: 350 },
                { name: "IOCL", opening: 10, closing: 340 },
                { name: "PGCIL", opening: 25, closing: 430 },
                { name: "ONGC", opening: 10, closing: 450 },
                { name: "NTPC", opening: 15, closing: 510 },
                { name: "HPCL", opening: 20, closing: 600 }
            ],
            "ST": [
                { name: "BEL", opening: 18, closing: 650 },
                { name: "IOCL", opening: 21, closing: 690 },
                { name: "PGCIL", opening: 35, closing: 680 },
                { name: "ONGC", opening: 25, closing: 670 },
                { name: "NTPC", opening: 30, closing: 660 },
                { name: "HPCL", opening: 28, closing: 650 }
            ]
        }
    },
    "ECE": {
        "IIT": {
            "General": [
                { name: "IIT Bombay", opening: 10, closing: 120 },
                { name: "IIT Delhi", opening: 15, closing: 140 },
                { name: "IIT Kanpur", opening: 20, closing: 160 },
                { name: "IIT Madras", opening: 25, closing: 150 },
                { name: "IIT Kharagpur", opening: 30, closing: 170 },
                { name: "IIT Roorkee", opening: 40, closing: 200 },
                { name: "IIT Guwahati", opening: 50, closing: 220 }
            ],
            "OBC": [
                { name: "IIT Bombay", opening: 50, closing: 300 },
                { name: "IIT Delhi", opening: 60, closing: 320 },
                { name: "IIT Kanpur", opening: 70, closing: 340 },
                { name: "IIT Madras", opening: 80, closing: 330 },
                { name: "IIT Kharagpur", opening: 90, closing: 360 },
                { name: "IIT Roorkee", opening: 100, closing: 400 },
                { name: "IIT Guwahati", opening: 120, closing: 450 }
            ],
            "EWS": [
                { name: "IIT Bombay", opening: 80, closing: 200 },
                { name: "IIT Delhi", opening: 90, closing: 220 },
                { name: "IIT Kanpur", opening: 100, closing: 250 },
                { name: "IIT Madras", opening: 110, closing: 240 },
                { name: "IIT Kharagpur", opening: 120, closing: 260 },
                { name: "IIT Roorkee", opening: 130, closing: 300 },
                { name: "IIT Guwahati", opening: 150, closing: 350 }
            ],
            "SC": [
                { name: "IIT Bombay", opening: 300, closing: 700 },
                { name: "IIT Delhi", opening: 350, closing: 750 },
                { name: "IIT Kanpur", opening: 400, closing: 800 },
                { name: "IIT Madras", opening: 450, closing: 770 },
                { name: "IIT Kharagpur", opening: 500, closing: 850 },
                { name: "IIT Roorkee", opening: 550, closing: 900 },
                { name: "IIT Guwahati", opening: 600, closing: 950 }
            ],
            "ST": [
                { name: "IIT Bombay", opening: 500, closing: 1000 },
                { name: "IIT Delhi", opening: 550, closing: 1100 },
                { name: "IIT Kanpur", opening: 600, closing: 1150 },
                { name: "IIT Madras", opening: 650, closing: 1200 },
                { name: "IIT Kharagpur", opening: 700, closing: 1250 },
                { name: "IIT Roorkee", opening: 750, closing: 1300 },
                { name: "IIT Guwahati", opening: 800, closing: 1400 }
            ]
        },
        "NIT": {
            "General": [
                { name: "NIT Trichy", opening: 50, closing: 450 },
                { name: "NIT Surathkal", opening: 70, closing: 500 },
                { name: "NIT Warangal", opening: 60, closing: 480 },
                { name: "NIT Calicut", opening: 80, closing: 550 },
                { name: "NIT Rourkela", opening: 100, closing: 600 },
                { name: "NIT Allahabad", opening: 90, closing: 580 },
                { name: "NIT Jaipur", opening: 110, closing: 650 }
            ],
            "OBC": [
                { name: "NIT Trichy", opening: 120, closing: 700 },
                { name: "NIT Surathkal", opening: 140, closing: 750 },
                { name: "NIT Warangal", opening: 130, closing: 720 },
                { name: "NIT Calicut", opening: 150, closing: 800 },
                { name: "NIT Rourkela", opening: 170, closing: 850 },
                { name: "NIT Allahabad", opening: 160, closing: 830 },
                { name: "NIT Jaipur", opening: 180, closing: 900 }
            ],
            "EWS": [
                { name: "NIT Trichy", opening: 100, closing: 500 },
                { name: "NIT Surathkal", opening: 120, closing: 550 },
                { name: "NIT Warangal", opening: 110, closing: 520 },
                { name: "NIT Calicut", opening: 130, closing: 600 },
                { name: "NIT Rourkela", opening: 150, closing: 650 },
                { name: "NIT Allahabad", opening: 140, closing: 620 },
                { name: "NIT Jaipur", opening: 160, closing: 680 }
            ],
            "SC": [
                { name: "NIT Trichy", opening: 400, closing: 1200 },
                { name: "NIT Surathkal", opening: 450, closing: 1300 },
                { name: "NIT Warangal", opening: 420, closing: 1250 },
                { name: "NIT Calicut", opening: 480, closing: 1400 },
                { name: "NIT Rourkela", opening: 500, closing: 1500 },
                { name: "NIT Allahabad", opening: 470, closing: 1450 },
                { name: "NIT Jaipur", opening: 550, closing: 1600 }
            ],
            "ST": [
                { name: "NIT Trichy", opening: 800, closing: 2000 },
                { name: "NIT Surathkal", opening: 850, closing: 2100 },
                { name: "NIT Warangal", opening: 820, closing: 2050 },
                { name: "NIT Calicut", opening: 900, closing: 2200 },
                { name: "NIT Rourkela", opening: 950, closing: 2300 },
                { name: "NIT Allahabad", opening: 910, closing: 2250 },
                { name: "NIT Jaipur", opening: 1000, closing: 2400 }
            ]
        },
        "PSU": {
            "General": [
                { name: "BEL", opening: 10, closing: 150 },
                { name: "BHEL", opening: 20, closing: 180 },
                { name: "ONGC", opening: 30, closing: 120 },
                { name: "IOCL", opening: 15, closing: 100 },
                { name: "PGCIL", opening: 5, closing: 90 }
            ],
            "OBC": [
                { name: "BEL", opening: 50, closing: 250 },
                { name: "BHEL", opening: 60, closing: 300 },
                { name: "ONGC", opening: 40, closing: 200 },
                { name: "IOCL", opening: 35, closing: 180 },
                { name: "PGCIL", opening: 25, closing: 150 }
            ],
            "EWS": [
                { name: "BEL", opening: 80, closing: 200 },
                { name: "BHEL", opening: 90, closing: 220 },
                { name: "ONGC", opening: 70, closing: 180 },
                { name: "IOCL", opening: 65, closing: 160 },
                { name: "PGCIL", opening: 55, closing: 140 }
            ],
            "SC": [
                { name: "BEL", opening: 200, closing: 700 },
                { name: "BHEL", opening: 250, closing: 750 },
                { name: "ONGC", opening: 220, closing: 600 },
                { name: "IOCL", opening: 210, closing: 580 },
                { name: "PGCIL", opening: 190, closing: 500 }
            ],
            "ST": [
                { name: "BEL", opening: 500, closing: 1200 },
                { name: "BHEL", opening: 600, closing: 1300 },
                { name: "ONGC", opening: 550, closing: 1000 },
                { name: "IOCL", opening: 520, closing: 950 },
                { name: "PGCIL", opening: 500, closing: 900 }
            ]
        }
    },
    "ME": {
        "IIT": {
            "General": [
                { name: "IIT Bombay", opening: 10, closing: 320 },
                { name: "IIT Delhi", opening: 20, closing: 340 },
                { name: "IIT Kanpur", opening: 30, closing: 360 },
                { name: "IIT Kharagpur", opening: 40, closing: 400 },
                { name: "IIT Madras", opening: 15, closing: 350 },
                { name: "IIT Roorkee", opening: 50, closing: 420 },
                { name: "IIT Guwahati", opening: 60, closing: 500 }
            ],
            "OBC": [
                { name: "IIT Bombay", opening: 70, closing: 450 },
                { name: "IIT Delhi", opening: 80, closing: 480 },
                { name: "IIT Kanpur", opening: 90, closing: 500 },
                { name: "IIT Kharagpur", opening: 100, closing: 550 },
                { name: "IIT Madras", opening: 75, closing: 500 },
                { name: "IIT Roorkee", opening: 120, closing: 580 },
                { name: "IIT Guwahati", opening: 140, closing: 600 }
            ],
            "EWS": [
                { name: "IIT Bombay", opening: 50, closing: 400 },
                { name: "IIT Delhi", opening: 60, closing: 420 },
                { name: "IIT Kanpur", opening: 70, closing: 450 },
                { name: "IIT Kharagpur", opening: 80, closing: 500 },
                { name: "IIT Madras", opening: 55, closing: 470 },
                { name: "IIT Roorkee", opening: 100, closing: 520 },
                { name: "IIT Guwahati", opening: 120, closing: 600 }
            ],
            "SC": [
                { name: "IIT Bombay", opening: 250, closing: 1200 },
                { name: "IIT Delhi", opening: 300, closing: 1300 },
                { name: "IIT Kanpur", opening: 280, closing: 1250 },
                { name: "IIT Kharagpur", opening: 320, closing: 1400 },
                { name: "IIT Madras", opening: 270, closing: 1300 },
                { name: "IIT Roorkee", opening: 350, closing: 1500 },
                { name: "IIT Guwahati", opening: 400, closing: 1600 }
            ],
            "ST": [
                { name: "IIT Bombay", opening: 800, closing: 1800 },
                { name: "IIT Delhi", opening: 850, closing: 2000 },
                { name: "IIT Kanpur", opening: 900, closing: 1900 },
                { name: "IIT Kharagpur", opening: 950, closing: 2200 },
                { name: "IIT Madras", opening: 870, closing: 2100 },
                { name: "IIT Roorkee", opening: 1000, closing: 2300 },
                { name: "IIT Guwahati", opening: 1100, closing: 2500 }
            ]
        },
        "NIT": {
            "General": [
                { name: "NIT Trichy", opening: 120, closing: 900 },
                { name: "NIT Surathkal", opening: 130, closing: 950 },
                { name: "NIT Warangal", opening: 140, closing: 980 },
                { name: "NIT Calicut", opening: 150, closing: 1000 },
                { name: "NIT Rourkela", opening: 160, closing: 1050 },
                { name: "NIT Jaipur", opening: 170, closing: 1100 },
                { name: "NIT Allahabad", opening: 180, closing: 1150 }
            ],
            "OBC": [
                { name: "NIT Trichy", opening: 400, closing: 1300 },
                { name: "NIT Surathkal", opening: 420, closing: 1350 },
                { name: "NIT Warangal", opening: 440, closing: 1400 },
                { name: "NIT Calicut", opening: 460, closing: 1450 },
                { name: "NIT Rourkela", opening: 480, closing: 1500 },
                { name: "NIT Jaipur", opening: 500, closing: 1550 },
                { name: "NIT Allahabad", opening: 520, closing: 1600 }
            ],
            "EWS": [
                { name: "NIT Trichy", opening: 300, closing: 1000 },
                { name: "NIT Surathkal", opening: 320, closing: 1050 },
                { name: "NIT Warangal", opening: 340, closing: 1100 },
                { name: "NIT Calicut", opening: 360, closing: 1150 },
                { name: "NIT Rourkela", opening: 380, closing: 1200 },
                { name: "NIT Jaipur", opening: 400, closing: 1250 },
                { name: "NIT Allahabad", opening: 420, closing: 1300 }
            ],
            "SC": [
                { name: "NIT Trichy", opening: 1000, closing: 3000 },
                { name: "NIT Surathkal", opening: 1100, closing: 3200 },
                { name: "NIT Warangal", opening: 1200, closing: 3400 },
                { name: "NIT Calicut", opening: 1300, closing: 3600 },
                { name: "NIT Rourkela", opening: 1400, closing: 3800 },
                { name: "NIT Jaipur", opening: 1500, closing: 4000 },
                { name: "NIT Allahabad", opening: 1600, closing: 4200 }
            ],
            "ST": [
                { name: "NIT Trichy", opening: 3000, closing: 6000 },
                { name: "NIT Surathkal", opening: 3200, closing: 6300 },
                { name: "NIT Warangal", opening: 3400, closing: 6600 },
                { name: "NIT Calicut", opening: 3600, closing: 6900 },
                { name: "NIT Rourkela", opening: 3800, closing: 7200 },
                { name: "NIT Jaipur", opening: 4000, closing: 7500 },
                { name: "NIT Allahabad", opening: 4200, closing: 7800 }
            ]
        },
        "PSU": {
            "General": [
                { name: "ONGC", opening: 1, closing: 120 },
                { name: "IOCL", opening: 5, closing: 150 },
                { name: "NTPC", opening: 10, closing: 180 },
                { name: "BHEL", opening: 15, closing: 200 },
                { name: "GAIL", opening: 20, closing: 250 },
                { name: "HPCL", opening: 25, closing: 300 },
                { name: "SAIL", opening: 30, closing: 350 }
            ],
            "OBC": [
                { name: "ONGC", opening: 50, closing: 200 },
                { name: "IOCL", opening: 60, closing: 250 },
                { name: "NTPC", opening: 70, closing: 300 },
                { name: "BHEL", opening: 80, closing: 350 },
                { name: "GAIL", opening: 90, closing: 400 },
                { name: "HPCL", opening: 100, closing: 450 },
                { name: "SAIL", opening: 110, closing: 500 }
            ],
            "EWS": [
                { name: "ONGC", opening: 40, closing: 180 },
                { name: "IOCL", opening: 50, closing: 200 },
                { name: "NTPC", opening: 60, closing: 250 },
                { name: "BHEL", opening: 70, closing: 300 },
                { name: "GAIL", opening: 80, closing: 350 },
                { name: "HPCL", opening: 90, closing: 400 },
                { name: "SAIL", opening: 100, closing: 450 }
            ],
            "SC": [
                { name: "ONGC", opening: 300, closing: 1200 },
                { name: "IOCL", opening: 350, closing: 1300 },
                { name: "NTPC", opening: 400, closing: 1400 },
                { name: "BHEL", opening: 450, closing: 1500 },
                { name: "GAIL", opening: 500, closing: 1600 },
                { name: "HPCL", opening: 550, closing: 1700 },
                { name: "SAIL", opening: 600, closing: 1800 }
            ],
            "ST": [
                { name: "ONGC", opening: 1000, closing: 2500 },
                { name: "IOCL", opening: 1100, closing: 2600 },
                { name: "NTPC", opening: 1200, closing: 2700 },
                { name: "BHEL", opening: 1300, closing: 2800 },
                { name: "GAIL", opening: 1400, closing: 2900 },
                { name: "HPCL", opening: 1500, closing: 3000 },
                { name: "SAIL", opening: 1600, closing: 3200 }
            ]
        }
    },
    "CE": {
        "IIT": {
            "General": [
                { name: "IIT Bombay", opening: 10, closing: 300 },
                { name: "IIT Delhi", opening: 20, closing: 350 },
                { name: "IIT Kanpur", opening: 30, closing: 400 },
                { name: "IIT Madras", opening: 40, closing: 450 },
                { name: "IIT Kharagpur", opening: 50, closing: 500 },
                { name: "IIT Roorkee", opening: 60, closing: 550 },
                { name: "IIT Guwahati", opening: 70, closing: 600 }
            ],
            "OBC": [
                { name: "IIT Bombay", opening: 100, closing: 600 },
                { name: "IIT Delhi", opening: 120, closing: 650 },
                { name: "IIT Kanpur", opening: 140, closing: 700 },
                { name: "IIT Madras", opening: 160, closing: 750 },
                { name: "IIT Kharagpur", opening: 180, closing: 800 },
                { name: "IIT Roorkee", opening: 200, closing: 850 },
                { name: "IIT Guwahati", opening: 220, closing: 900 }
            ],
            "EWS": [
                { name: "IIT Bombay", opening: 90, closing: 400 },
                { name: "IIT Delhi", opening: 110, closing: 450 },
                { name: "IIT Kanpur", opening: 130, closing: 500 },
                { name: "IIT Madras", opening: 150, closing: 550 },
                { name: "IIT Kharagpur", opening: 170, closing: 600 },
                { name: "IIT Roorkee", opening: 190, closing: 650 },
                { name: "IIT Guwahati", opening: 210, closing: 700 }
            ],
            "SC": [
                { name: "IIT Bombay", opening: 700, closing: 2000 },
                { name: "IIT Delhi", opening: 750, closing: 2100 },
                { name: "IIT Kanpur", opening: 800, closing: 2200 },
                { name: "IIT Madras", opening: 850, closing: 2300 },
                { name: "IIT Kharagpur", opening: 900, closing: 2400 },
                { name: "IIT Roorkee", opening: 950, closing: 2500 },
                { name: "IIT Guwahati", opening: 1000, closing: 2600 }
            ],
            "ST": [
                { name: "IIT Bombay", opening: 2000, closing: 5000 },
                { name: "IIT Delhi", opening: 2100, closing: 5200 },
                { name: "IIT Kanpur", opening: 2200, closing: 5400 },
                { name: "IIT Madras", opening: 2300, closing: 5600 },
                { name: "IIT Kharagpur", opening: 2400, closing: 5800 },
                { name: "IIT Roorkee", opening: 2500, closing: 6000 },
                { name: "IIT Guwahati", opening: 2600, closing: 6200 }
            ]
        },
        "NIT": {
            "General": [
                { name: "NIT Trichy", opening: 150, closing: 500 },
                { name: "NIT Surathkal", opening: 200, closing: 550 },
                { name: "NIT Warangal", opening: 250, closing: 600 },
                { name: "NIT Calicut", opening: 300, closing: 650 },
                { name: "NIT Rourkela", opening: 350, closing: 700 },
                { name: "NIT Durgapur", opening: 400, closing: 750 },
                { name: "NIT Jaipur", opening: 450, closing: 800 }
            ],
            "OBC": [
                { name: "NIT Trichy", opening: 500, closing: 1200 },
                { name: "NIT Surathkal", opening: 550, closing: 1300 },
                { name: "NIT Warangal", opening: 600, closing: 1400 },
                { name: "NIT Calicut", opening: 650, closing: 1500 },
                { name: "NIT Rourkela", opening: 700, closing: 1600 },
                { name: "NIT Durgapur", opening: 750, closing: 1700 },
                { name: "NIT Jaipur", opening: 800, closing: 1800 }
            ],
            "EWS": [
                { name: "NIT Trichy", opening: 450, closing: 1100 },
                { name: "NIT Surathkal", opening: 500, closing: 1200 },
                { name: "NIT Warangal", opening: 550, closing: 1300 },
                { name: "NIT Calicut", opening: 600, closing: 1400 },
                { name: "NIT Rourkela", opening: 650, closing: 1500 },
                { name: "NIT Durgapur", opening: 700, closing: 1600 },
                { name: "NIT Jaipur", opening: 750, closing: 1700 }
            ],
            "SC": [
                { name: "NIT Trichy", opening: 1000, closing: 3000 },
                { name: "NIT Surathkal", opening: 1100, closing: 3200 },
                { name: "NIT Warangal", opening: 1200, closing: 3400 },
                { name: "NIT Calicut", opening: 1300, closing: 3500 },
                { name: "NIT Rourkela", opening: 1400, closing: 3600 },
                { name: "NIT Durgapur", opening: 1500, closing: 3800 },
                { name: "NIT Jaipur", opening: 1600, closing: 4000 }
            ],
            "ST": [
                { name: "NIT Trichy", opening: 3000, closing: 6000 },
                { name: "NIT Surathkal", opening: 3200, closing: 6200 },
                { name: "NIT Warangal", opening: 3400, closing: 6400 },
                { name: "NIT Calicut", opening: 3500, closing: 6500 },
                { name: "NIT Rourkela", opening: 3600, closing: 6700 },
                { name: "NIT Durgapur", opening: 3800, closing: 6900 },
                { name: "NIT Jaipur", opening: 4000, closing: 7100 }
            ]
        },
        "PSU": {
            "General": [
                { name: "ONGC", opening: 100, closing: 500 },
                { name: "BHEL", opening: 150, closing: 550 },
                { name: "NTPC", opening: 200, closing: 600 },
                { name: "IOCL", opening: 250, closing: 650 },
                { name: "GAIL", opening: 300, closing: 700 },
                { name: "HPCL", opening: 350, closing: 750 },
                { name: "SAIL", opening: 400, closing: 800 }
            ],
            "OBC": [
                { name: "ONGC", opening: 500, closing: 1200 },
                { name: "BHEL", opening: 550, closing: 1300 },
                { name: "NTPC", opening: 600, closing: 1400 },
                { name: "IOCL", opening: 650, closing: 1500 },
                { name: "GAIL", opening: 700, closing: 1600 },
                { name: "HPCL", opening: 750, closing: 1700 },
                { name: "SAIL", opening: 800, closing: 1800 }
            ],
            "EWS": [
                { name: "ONGC", opening: 450, closing: 1100 },
                { name: "BHEL", opening: 500, closing: 1200 },
                { name: "NTPC", opening: 550, closing: 1300 },
                { name: "IOCL", opening: 600, closing: 1400 },
                { name: "GAIL", opening: 650, closing: 1500 },
                { name: "HPCL", opening: 700, closing: 1600 },
                { name: "SAIL", opening: 750, closing: 1700 }
            ],
            "SC": [
                { name: "ONGC", opening: 1000, closing: 3000 },
                { name: "BHEL", opening: 1100, closing: 3200 },
                { name: "NTPC", opening: 1200, closing: 3400 },
                { name: "IOCL", opening: 1300, closing: 3500 },
                { name: "GAIL", opening: 1400, closing: 3600 },
                { name: "HPCL", opening: 1500, closing: 3800 },
                { name: "SAIL", opening: 1600, closing: 4000 }
            ],
            "ST": [
                { name: "ONGC", opening: 3000, closing: 6000 },
                { name: "BHEL", opening: 3200, closing: 6200 },
                { name: "NTPC", opening: 3400, closing: 6400 },
                { name: "IOCL", opening: 3500, closing: 6500 },
                { name: "GAIL", opening: 3600, closing: 6700 },
                { name: "HPCL", opening: 3800, closing: 6900 },
                { name: "SAIL", opening: 4000, closing: 7100 }
            ]
        }
    },
    "EE": {
        "IIT": {
            "General": [
                { name: "IIT Bombay", opening: 50, closing: 200 },
                { name: "IIT Delhi", opening: 100, closing: 300 },
                { name: "IIT Kanpur", opening: 150, closing: 350 },
                { name: "IIT Kharagpur", opening: 200, closing: 400 },
                { name: "IIT Roorkee", opening: 250, closing: 450 },
                { name: "IIT Madras", opening: 300, closing: 500 },
                { name: "IIT Guwahati", opening: 350, closing: 550 }
            ],
            "OBC": [
                { name: "IIT Bombay", opening: 200, closing: 600 },
                { name: "IIT Delhi", opening: 250, closing: 700 },
                { name: "IIT Kanpur", opening: 300, closing: 800 },
                { name: "IIT Kharagpur", opening: 350, closing: 900 },
                { name: "IIT Roorkee", opening: 400, closing: 1000 },
                { name: "IIT Madras", opening: 450, closing: 1100 },
                { name: "IIT Guwahati", opening: 500, closing: 1200 }
            ],
            "EWS": [
                { name: "IIT Bombay", opening: 150, closing: 500 },
                { name: "IIT Delhi", opening: 200, closing: 600 },
                { name: "IIT Kanpur", opening: 250, closing: 700 },
                { name: "IIT Kharagpur", opening: 300, closing: 800 },
                { name: "IIT Roorkee", opening: 350, closing: 900 },
                { name: "IIT Madras", opening: 400, closing: 1000 },
                { name: "IIT Guwahati", opening: 450, closing: 1100 }
            ],
            "SC": [
                { name: "IIT Bombay", opening: 500, closing: 1500 },
                { name: "IIT Delhi", opening: 600, closing: 1700 },
                { name: "IIT Kanpur", opening: 700, closing: 1800 },
                { name: "IIT Kharagpur", opening: 800, closing: 1900 },
                { name: "IIT Roorkee", opening: 900, closing: 2000 },
                { name: "IIT Madras", opening: 1000, closing: 2100 },
                { name: "IIT Guwahati", opening: 1100, closing: 2200 }
            ],
            "ST": [
                { name: "IIT Bombay", opening: 1500, closing: 3000 },
                { name: "IIT Delhi", opening: 1700, closing: 3500 },
                { name: "IIT Kanpur", opening: 1800, closing: 3600 },
                { name: "IIT Kharagpur", opening: 1900, closing: 3700 },
                { name: "IIT Roorkee", opening: 2000, closing: 3800 },
                { name: "IIT Madras", opening: 2100, closing: 3900 },
                { name: "IIT Guwahati", opening: 2200, closing: 4000 }
            ]
        },
        "NIT": {
            "General": [
                { name: "NIT Trichy", opening: 500, closing: 1200 },
                { name: "NIT Surathkal", opening: 600, closing: 1400 },
                { name: "NIT Warangal", opening: 700, closing: 1600 },
                { name: "NIT Calicut", opening: 800, closing: 1800 },
                { name: "NIT Rourkela", opening: 900, closing: 2000 },
                { name: "NIT Durgapur", opening: 1000, closing: 2200 },
                { name: "NIT Jaipur", opening: 1100, closing: 2400 }
            ],
            "OBC": [
                { name: "NIT Trichy", opening: 1000, closing: 2000 },
                { name: "NIT Surathkal", opening: 1100, closing: 2200 },
                { name: "NIT Warangal", opening: 1200, closing: 2400 },
                { name: "NIT Calicut", opening: 1300, closing: 2600 },
                { name: "NIT Rourkela", opening: 1400, closing: 2800 },
                { name: "NIT Durgapur", opening: 1500, closing: 3000 },
                { name: "NIT Jaipur", opening: 1600, closing: 3200 }
            ],
            "EWS": [
                { name: "NIT Trichy", opening: 900, closing: 1800 },
                { name: "NIT Surathkal", opening: 1000, closing: 2000 },
                { name: "NIT Warangal", opening: 1100, closing: 2200 },
                { name: "NIT Calicut", opening: 1200, closing: 2400 },
                { name: "NIT Rourkela", opening: 1300, closing: 2600 },
                { name: "NIT Durgapur", opening: 1400, closing: 2800 },
                { name: "NIT Jaipur", opening: 1500, closing: 3000 }
            ],
            "SC": [
                { name: "NIT Trichy", opening: 1500, closing: 3500 },
                { name: "NIT Surathkal", opening: 1600, closing: 3700 },
                { name: "NIT Warangal", opening: 1700, closing: 3900 },
                { name: "NIT Calicut", opening: 1800, closing: 4100 },
                { name: "NIT Rourkela", opening: 1900, closing: 4300 },
                { name: "NIT Durgapur", opening: 2000, closing: 4500 },
                { name: "NIT Jaipur", opening: 2100, closing: 4700 }
            ],
            "ST": [
                { name: "NIT Trichy", opening: 2500, closing: 5000 },
                { name: "NIT Surathkal", opening: 2700, closing: 5200 },
                { name: "NIT Warangal", opening: 2800, closing: 5400 },
                { name: "NIT Calicut", opening: 2900, closing: 5600 },
                { name: "NIT Rourkela", opening: 3000, closing: 5800 },
                { name: "NIT Durgapur", opening: 3100, closing: 6000 },
                { name: "NIT Jaipur", opening: 3200, closing: 6200 }
            ]
        },
        "PSU": {
            "General": [
                { name: "Power Grid Corporation", opening: 50, closing: 100 },
                { name: "NTPC", opening: 70, closing: 150 },
                { name: "BHEL", opening: 100, closing: 200 },
                { name: "Indian Oil Corporation", opening: 120, closing: 250 },
                { name: "GAIL India Limited", opening: 150, closing: 300 },
                { name: "NHPC", opening: 180, closing: 350 },
                { name: "REC Limited", opening: 200, closing: 400 }
            ],
            "OBC": [
                { name: "Power Grid Corporation", opening: 100, closing: 250 },
                { name: "NTPC", opening: 120, closing: 300 },
                { name: "BHEL", opening: 150, closing: 350 },
                { name: "Indian Oil Corporation", opening: 180, closing: 400 },
                { name: "GAIL India Limited", opening: 200, closing: 450 },
                { name: "NHPC", opening: 220, closing: 500 },
                { name: "REC Limited", opening: 250, closing: 550 }
            ],
            "EWS": [
                { name: "Power Grid Corporation", opening: 90, closing: 200 },
                { name: "NTPC", opening: 110, closing: 220 },
                { name: "BHEL", opening: 130, closing: 250 },
                { name: "Indian Oil Corporation", opening: 150, closing: 300 },
                { name: "GAIL India Limited", opening: 180, closing: 350 },
                { name: "NHPC", opening: 200, closing: 400 },
                { name: "REC Limited", opening: 220, closing: 450 }
            ],
            "SC": [
                { name: "Power Grid Corporation", opening: 150, closing: 350 },
                { name: "NTPC", opening: 170, closing: 400 },
                { name: "BHEL", opening: 200, closing: 450 },
                { name: "Indian Oil Corporation", opening: 220, closing: 500 },
                { name: "GAIL India Limited", opening: 250, closing: 550 },
                { name: "NHPC", opening: 270, closing: 600 },
                { name: "REC Limited", opening: 300, closing: 650 }
            ],
            "ST": [
                { name: "Power Grid Corporation", opening: 250, closing: 500 },
                { name: "NTPC", opening: 280, closing: 550 },
                { name: "BHEL", opening: 300, closing: 600 },
                { name: "Indian Oil Corporation", opening: 320, closing: 650 },
                { name: "GAIL India Limited", opening: 350, closing: 700 },
                { name: "NHPC", opening: 380, closing: 750 },
                { name: "REC Limited", opening: 400, closing: 800 }
            ]
        }
    }
    },
    "2021": {
        // Add similar data structure for 2021
        "CSE": {
            "IIT": {
                "General": [
                    { name: "IIT Bombay", opening: 1, closing: 50 },
                    { name: "IIT Delhi", opening: 20, closing: 60 },
                    { name: "IIT Kanpur", opening: 20, closing: 100 },
                    { name: "IIT Kharagpur", opening: 15, closing: 110 },
                    { name: "IIT Madras", opening: 30, closing: 150 },
                    { name: "IIT Roorkee", opening: 50, closing: 170 },
                    { name: "IIT Guwahati", opening: 70, closing: 180 }
                ],
                "OBC": [
                    { name: "IIT Bombay", opening: 40, closing: 250 },
                    { name: "IIT Delhi", opening: 50, closing: 300 },
                    { name: "IIT Kanpur", opening: 60, closing: 320 },
                    { name: "IIT Kharagpur", opening: 70, closing: 3300 },
                    { name: "IIT Madras", opening: 85, closing: 350 },
                    { name: "IIT Roorkee", opening: 90, closing: 380 },
                    { name: "IIT Guwahati", opening: 110, closing: 410 }
                ],
                "EWS": [
                    { name: "IIT Bombay", opening: 70, closing: 200 },
                    { name: "IIT Delhi", opening: 75, closing: 210 },
                    { name: "IIT Kanpur", opening: 90, closing: 230 },
                    { name: "IIT Kharagpur", opening: 95, closing: 225 },
                    { name: "IIT Madras", opening: 110, closing: 250 },
                    { name: "IIT Roorkee", opening: 125, closing: 280 },
                    { name: "IIT Guwahati", opening: 140, closing: 300 }
                ],
                "SC": [
                    { name: "IIT Bombay", opening: 320, closing: 800 },
                    { name: "IIT Delhi", opening: 350, closing: 900 },
                    { name: "IIT Kanpur", opening: 380, closing: 910 },
                    { name: "IIT Kharagpur", opening: 450, closing: 950 },
                    { name: "IIT Madras", opening: 500, closing: 990 },
                    { name: "IIT Roorkee", opening: 510, closing: 1000 },
                    { name: "IIT Guwahati", opening: 550, closing: 1100 }
                ],
                "ST": [
                    { name: "IIT Bombay", opening: 500, closing: 1150 },
                    { name: "IIT Delhi", opening: 580, closing: 1200 },
                    { name: "IIT Kanpur", opening: 700, closing: 1370 },
                    { name: "IIT Kharagpur", opening: 710, closing: 1400 },
                    { name: "IIT Madras", opening: 790, closing: 1420 },
                    { name: "IIT Roorkee", opening: 900, closing: 1500 },
                    { name: "IIT Guwahati", opening: 950, closing: 1600 }
                ]
            },
            "NIT": {
                "General": [
                    { name: "NIT Trichy", opening: 400, closing: 600 },
                    { name: "NIT Surathkal", opening: 500, closing: 700 },
                    { name: "NIT Warangal", opening: 600, closing: 800 },
                    { name: "NIT Rourkela", opening: 700, closing: 900 },
                    { name: "NIT Calicut", opening: 800, closing: 1000 },
                    { name: "NIT Jaipur", opening: 900, closing: 1200 },
                    { name: "NIT Bhopal", opening: 1000, closing: 1300 }
                ],
                "OBC": [
                    { name: "NIT Trichy", opening: 500, closing: 750 },
                    { name: "NIT Surathkal", opening: 600, closing: 850 },
                    { name: "NIT Warangal", opening: 700, closing: 950 },
                    { name: "NIT Rourkela", opening: 800, closing: 1000 },
                    { name: "NIT Calicut", opening: 900, closing: 1100 },
                    { name: "NIT Jaipur", opening: 1000, closing: 1300 },
                    { name: "NIT Bhopal", opening: 1100, closing: 1400 }
                ],
                "EWS": [
                    { name: "NIT Trichy", opening: 450, closing: 650 },
                    { name: "NIT Surathkal", opening: 550, closing: 750 },
                    { name: "NIT Warangal", opening: 650, closing: 850 },
                    { name: "NIT Rourkela", opening: 750, closing: 950 },
                    { name: "NIT Calicut", opening: 850, closing: 1050 },
                    { name: "NIT Jaipur", opening: 950, closing: 1200 },
                    { name: "NIT Bhopal", opening: 1050, closing: 1300 }
                ],
                "SC": [
                    { name: "NIT Trichy", opening: 700, closing: 1000 },
                    { name: "NIT Surathkal", opening: 800, closing: 1100 },
                    { name: "NIT Warangal", opening: 900, closing: 1200 },
                    { name: "NIT Rourkela", opening: 1000, closing: 1300 },
                    { name: "NIT Calicut", opening: 1100, closing: 1400 },
                    { name: "NIT Jaipur", opening: 1200, closing: 1500 },
                    { name: "NIT Bhopal", opening: 1300, closing: 1600 }
                ],
                "ST": [
                    { name: "NIT Trichy", opening: 1000, closing: 1300 },
                    { name: "NIT Surathkal", opening: 1100, closing: 1400 },
                    { name: "NIT Warangal", opening: 1200, closing: 1500 },
                    { name: "NIT Rourkela", opening: 1300, closing: 1600 },
                    { name: "NIT Calicut", opening: 1400, closing: 1700 },
                    { name: "NIT Jaipur", opening: 1500, closing: 1800 },
                    { name: "NIT Bhopal", opening: 1600, closing: 1900 }
                ]
            },
            "PSU": {
                "General": [
                    { name: "BHEL", opening: 15, closing: 210 },
                    { name: "IOCL", opening: 20, closing: 200 },
                    { name: "ONGC", opening: 25, closing: 250 },
                    { name: "NTPC", opening: 30, closing: 300 },
                    { name: "GAIL", opening: 35, closing: 320 },
                    { name: "PGCIL", opening: 40, closing: 390 },
                    { name: "HPCL", opening: 45, closing: 410 }
                ],
                "OBC": [
                    { name: "BHEL", opening: 5, closing: 310 },
                    { name: "IOCL", opening: 10, closing: 350 },
                    { name: "ONGC", opening: 30, closing: 400 },
                    { name: "NTPC", opening: 35, closing: 410 },
                    { name: "GAIL", opening: 45, closing: 480 },
                    { name: "PGCIL", opening: 40, closing: 490 },
                    { name: "HPCL", opening: 55, closing: 510 }
                ],
                "EWS": [
                    { name: "BHEL", opening: 12, closing: 230 },
                    { name: "IOCL", opening: 15, closing: 250 },
                    { name: "ONGC", opening: 20, closing: 290 },
                    { name: "NTPC", opening: 20, closing: 410 },
                    { name: "GAIL", opening: 25, closing: 460 },
                    { name: "PGCIL", opening: 35, closing: 520 },
                    { name: "HPCL", opening: 40, closing: 550 }
                ],
                "SC": [
                    { name: "BHEL", opening: 20, closing: 410 },
                    { name: "IOCL", opening: 25, closing: 400 },
                    { name: "ONGC", opening: 10, closing: 450 },
                    { name: "NTPC", opening: 40, closing: 490 },
                    { name: "GAIL", opening: 50, closing: 500 },
                    { name: "PGCIL", opening: 60, closing: 510 },
                    { name: "HPCL", opening: 65, closing: 550 }
                ],
                "ST": [
                    { name: "BHEL", opening: 50, closing: 450 },
                    { name: "IOCL", opening: 55, closing: 490 },
                    { name: "ONGC", opening: 60, closing: 530 },
                    { name: "NTPC", opening: 65, closing: 620 },
                    { name: "GAIL", opening: 70, closing: 650 },
                    { name: "PGCIL", opening: 75, closing: 700 },
                    { name: "HPCL", opening: 80, closing: 750 }
                ]
            }
        },
        "ECE": {
            "IIT": {
                "General": [
                    { name: "IIT Bombay", opening: 150, closing: 300 },
                    { name: "IIT Delhi", opening: 200, closing: 400 },
                    { name: "IIT Kanpur", opening: 250, closing: 500 },
                    { name: "IIT Kharagpur", opening: 300, closing: 600 },
                    { name: "IIT Madras", opening: 350, closing: 700 },
                    { name: "IIT Roorkee", opening: 400, closing: 800 },
                    { name: "IIT BHU", opening: 450, closing: 900 }
                ],
                "OBC": [
                    { name: "IIT Bombay", opening: 250, closing: 500 },
                    { name: "IIT Delhi", opening: 300, closing: 600 },
                    { name: "IIT Kanpur", opening: 350, closing: 700 },
                    { name: "IIT Kharagpur", opening: 400, closing: 800 },
                    { name: "IIT Madras", opening: 450, closing: 900 },
                    { name: "IIT Roorkee", opening: 500, closing: 1000 },
                    { name: "IIT BHU", opening: 550, closing: 1100 }
                ],
                "EWS": [
                    { name: "IIT Bombay", opening: 200, closing: 400 },
                    { name: "IIT Delhi", opening: 250, closing: 500 },
                    { name: "IIT Kanpur", opening: 300, closing: 600 },
                    { name: "IIT Kharagpur", opening: 350, closing: 700 },
                    { name: "IIT Madras", opening: 400, closing: 800 },
                    { name: "IIT Roorkee", opening: 450, closing: 900 },
                    { name: "IIT BHU", opening: 500, closing: 1000 }
                ],
                "SC": [
                    { name: "IIT Bombay", opening: 350, closing: 700 },
                    { name: "IIT Delhi", opening: 400, closing: 800 },
                    { name: "IIT Kanpur", opening: 450, closing: 900 },
                    { name: "IIT Kharagpur", opening: 500, closing: 1000 },
                    { name: "IIT Madras", opening: 550, closing: 1100 },
                    { name: "IIT Roorkee", opening: 600, closing: 1200 },
                    { name: "IIT BHU", opening: 650, closing: 1300 }
                ],
                "ST": [
                    { name: "IIT Bombay", opening: 500, closing: 800 },
                    { name: "IIT Delhi", opening: 550, closing: 900 },
                    { name: "IIT Kanpur", opening: 600, closing: 1000 },
                    { name: "IIT Kharagpur", opening: 650, closing: 1100 },
                    { name: "IIT Madras", opening: 700, closing: 1200 },
                    { name: "IIT Roorkee", opening: 750, closing: 1300 },
                    { name: "IIT BHU", opening: 800, closing: 1400 }
                ]
            },
            "NIT": {
            "General": [
                { name: "NIT Trichy", opening: 350, closing: 600 },
                { name: "NIT Surathkal", opening: 400, closing: 700 },
                { name: "NIT Warangal", opening: 450, closing: 800 },
                { name: "NIT Calicut", opening: 500, closing: 900 },
                { name: "NIT Rourkela", opening: 550, closing: 1000 },
                { name: "NIT Kurukshetra", opening: 600, closing: 1100 },
                { name: "NIT Durgapur", opening: 650, closing: 1200 }
            ],
            "OBC": [
                { name: "NIT Trichy", opening: 500, closing: 800 },
                { name: "NIT Surathkal", opening: 550, closing: 900 },
                { name: "NIT Warangal", opening: 600, closing: 1000 },
                { name: "NIT Calicut", opening: 650, closing: 1100 },
                { name: "NIT Rourkela", opening: 700, closing: 1200 },
                { name: "NIT Kurukshetra", opening: 750, closing: 1300 },
                { name: "NIT Durgapur", opening: 800, closing: 1400 }
            ],
            "EWS": [
                { name: "NIT Trichy", opening: 450, closing: 750 },
                { name: "NIT Surathkal", opening: 500, closing: 900 },
                { name: "NIT Warangal", opening: 550, closing: 1000 },
                { name: "NIT Calicut", opening: 600, closing: 1100 },
                { name: "NIT Rourkela", opening: 650, closing: 1200 },
                { name: "NIT Kurukshetra", opening: 700, closing: 1300 },
                { name: "NIT Durgapur", opening: 750, closing: 1400 }
            ],
            "SC": [
                { name: "NIT Trichy", opening: 600, closing: 1000 },
                { name: "NIT Surathkal", opening: 650, closing: 1100 },
                { name: "NIT Warangal", opening: 700, closing: 1200 },
                { name: "NIT Calicut", opening: 750, closing: 1300 },
                { name: "NIT Rourkela", opening: 800, closing: 1400 },
                { name: "NIT Kurukshetra", opening: 850, closing: 1500 },
                { name: "NIT Durgapur", opening: 900, closing: 1600 }
            ],
            "ST": [
                { name: "NIT Trichy", opening: 700, closing: 1200 },
                { name: "NIT Surathkal", opening: 750, closing: 1300 },
                { name: "NIT Warangal", opening: 800, closing: 1400 },
                { name: "NIT Calicut", opening: 850, closing: 1500 },
                { name: "NIT Rourkela", opening: 900, closing: 1600 },
                { name: "NIT Kurukshetra", opening: 950, closing: 1700 },
                { name: "NIT Durgapur", opening: 1000, closing: 1800 }
            ]
        },
        "PSU": {
            "General": [
                { name: "BHEL", opening: 50, closing: 150 },
                { name: "IOCL", opening: 100, closing: 250 },
                { name: "NTPC", opening: 150, closing: 300 },
                { name: "GAIL", opening: 200, closing: 350 },
                { name: "HPCL", opening: 250, closing: 400 },
                { name: "BPCL", opening: 300, closing: 450 },
                { name: "ECIL", opening: 350, closing: 500 }
            ],
            "OBC": [
                { name: "BHEL", opening: 100, closing: 250 },
                { name: "IOCL", opening: 150, closing: 300 },
                { name: "NTPC", opening: 200, closing: 350 },
                { name: "GAIL", opening: 250, closing: 400 },
                { name: "HPCL", opening: 300, closing: 450 },
                { name: "BPCL", opening: 350, closing: 500 },
                { name: "ECIL", opening: 400, closing: 550 }
            ],
            "EWS": [
                { name: "BHEL", opening: 75, closing: 200 },
                { name: "IOCL", opening: 125, closing: 275 },
                { name: "NTPC", opening: 175, closing: 325 },
                { name: "GAIL", opening: 225, closing: 375 },
                { name: "HPCL", opening: 275, closing: 425 },
                { name: "BPCL", opening: 325, closing: 475 },
                { name: "ECIL", opening: 375, closing: 525 }
            ],
            "SC": [
                { name: "BHEL", opening: 150, closing: 300 },
                { name: "IOCL", opening: 200, closing: 350 },
                { name: "NTPC", opening: 250, closing: 400 },
                { name: "GAIL", opening: 300, closing: 450 },
                { name: "HPCL", opening: 350, closing: 500 },
                { name: "BPCL", opening: 400, closing: 550 },
                { name: "ECIL", opening: 450, closing: 600 }
            ],
            "ST": [
                { name: "BHEL", opening: 200, closing: 350 },
                { name: "IOCL", opening: 250, closing: 400 },
                { name: "NTPC", opening: 300, closing: 450 },
                { name: "GAIL", opening: 350, closing: 500 },
                { name: "HPCL", opening: 400, closing: 550 },
                { name: "BPCL", opening: 450, closing: 600 },
                { name: "ECIL", opening: 500, closing: 650 }
            ]
        }
       },
       "ME": {
        "IIT": {
            "General": [
                { name: "IIT Bombay", opening: 100, closing: 250 },
                { name: "IIT Delhi", opening: 150, closing: 300 },
                { name: "IIT Kanpur", opening: 200, closing: 350 },
                { name: "IIT Kharagpur", opening: 250, closing: 400 },
                { name: "IIT Madras", opening: 300, closing: 450 },
                { name: "IIT Roorkee", opening: 350, closing: 500 },
                { name: "IIT Guwahati", opening: 400, closing: 550 }
            ],
            "OBC": [
                { name: "IIT Bombay", opening: 200, closing: 400 },
                { name: "IIT Delhi", opening: 250, closing: 500 },
                { name: "IIT Kanpur", opening: 300, closing: 550 },
                { name: "IIT Kharagpur", opening: 350, closing: 600 },
                { name: "IIT Madras", opening: 400, closing: 650 },
                { name: "IIT Roorkee", opening: 450, closing: 700 },
                { name: "IIT Guwahati", opening: 500, closing: 750 }
            ],
            "EWS": [
                { name: "IIT Bombay", opening: 150, closing: 350 },
                { name: "IIT Delhi", opening: 200, closing: 400 },
                { name: "IIT Kanpur", opening: 250, closing: 500 },
                { name: "IIT Kharagpur", opening: 300, closing: 550 },
                { name: "IIT Madras", opening: 350, closing: 600 },
                { name: "IIT Roorkee", opening: 400, closing: 650 },
                { name: "IIT Guwahati", opening: 450, closing: 700 }
            ],
            "SC": [
                { name: "IIT Bombay", opening: 300, closing: 500 },
                { name: "IIT Delhi", opening: 350, closing: 600 },
                { name: "IIT Kanpur", opening: 400, closing: 650 },
                { name: "IIT Kharagpur", opening: 450, closing: 700 },
                { name: "IIT Madras", opening: 500, closing: 750 },
                { name: "IIT Roorkee", opening: 550, closing: 800 },
                { name: "IIT Guwahati", opening: 600, closing: 850 }
            ],
            "ST": [
                { name: "IIT Bombay", opening: 400, closing: 600 },
                { name: "IIT Delhi", opening: 450, closing: 700 },
                { name: "IIT Kanpur", opening: 500, closing: 750 },
                { name: "IIT Kharagpur", opening: 550, closing: 800 },
                { name: "IIT Madras", opening: 600, closing: 850 },
                { name: "IIT Roorkee", opening: 650, closing: 900 },
                { name: "IIT Guwahati", opening: 700, closing: 950 }
            ]
        },
        "NIT": {
            "General": [
                { name: "NIT Trichy", opening: 200, closing: 350 },
                { name: "NIT Warangal", opening: 250, closing: 400 },
                { name: "NIT Surat", opening: 300, closing: 450 },
                { name: "NIT Rourkela", opening: 350, closing: 500 },
                { name: "NIT Jaipur", opening: 400, closing: 550 },
                { name: "NIT Calicut", opening: 450, closing: 600 },
                { name: "NIT Durgapur", opening: 500, closing: 650 }
            ],
            "OBC": [
                { name: "NIT Trichy", opening: 250, closing: 400 },
                { name: "NIT Warangal", opening: 300, closing: 450 },
                { name: "NIT Surat", opening: 350, closing: 500 },
                { name: "NIT Rourkela", opening: 400, closing: 550 },
                { name: "NIT Jaipur", opening: 450, closing: 600 },
                { name: "NIT Calicut", opening: 500, closing: 650 },
                { name: "NIT Durgapur", opening: 550, closing: 700 }
            ],
            "EWS": [
                { name: "NIT Trichy", opening: 225, closing: 375 },
                { name: "NIT Warangal", opening: 275, closing: 425 },
                { name: "NIT Surat", opening: 325, closing: 475 },
                { name: "NIT Rourkela", opening: 375, closing: 525 },
                { name: "NIT Jaipur", opening: 425, closing: 575 },
                { name: "NIT Calicut", opening: 475, closing: 625 },
                { name: "NIT Durgapur", opening: 525, closing: 675 }
            ],
            "SC": [
                { name: "NIT Trichy", opening: 350, closing: 500 },
                { name: "NIT Warangal", opening: 400, closing: 550 },
                { name: "NIT Surat", opening: 450, closing: 600 },
                { name: "NIT Rourkela", opening: 500, closing: 650 },
                { name: "NIT Jaipur", opening: 550, closing: 700 },
                { name: "NIT Calicut", opening: 600, closing: 750 },
                { name: "NIT Durgapur", opening: 650, closing: 800 }
            ],
            "ST": [
                { name: "NIT Trichy", opening: 400, closing: 550 },
                { name: "NIT Warangal", opening: 450, closing: 600 },
                { name: "NIT Surat", opening: 500, closing: 650 },
                { name: "NIT Rourkela", opening: 550, closing: 700 },
                { name: "NIT Jaipur", opening: 600, closing: 750 },
                { name: "NIT Calicut", opening: 650, closing: 800 },
                { name: "NIT Durgapur", opening: 700, closing: 850 }
            ]
        },
        "PSU": {
            "General": [
                { name: "BHEL", opening: 100, closing: 250 },
                { name: "IOCL", opening: 150, closing: 300 },
                { name: "NTPC", opening: 200, closing: 350 },
                { name: "GAIL", opening: 250, closing: 400 },
                { name: "ONGC", opening: 300, closing: 450 },
                { name: "Indian Oil Corporation Ltd", opening: 350, closing: 500 },
                { name: "SAIL", opening: 400, closing: 550 }
            ],
            "OBC": [
                { name: "BHEL", opening: 200, closing: 350 },
                { name: "IOCL", opening: 250, closing: 400 },
                { name: "NTPC", opening: 300, closing: 450 },
                { name: "GAIL", opening: 350, closing: 500 },
                { name: "ONGC", opening: 400, closing: 550 },
                { name: "Indian Oil Corporation Ltd", opening: 450, closing: 600 },
                { name: "SAIL", opening: 500, closing: 650 }
            ],
            "EWS": [
                { name: "BHEL", opening: 150, closing: 300 },
                { name: "IOCL", opening: 200, closing: 350 },
                { name: "NTPC", opening: 250, closing: 400 },
                { name: "GAIL", opening: 300, closing: 450 },
                { name: "ONGC", opening: 350, closing: 500 },
                { name: "Indian Oil Corporation Ltd", opening: 400, closing: 550 },
                { name: "SAIL", opening: 450, closing: 600 }
            ],
            "SC": [
                { name: "BHEL", opening: 300, closing: 450 },
                { name: "IOCL", opening: 350, closing: 500 },
                { name: "NTPC", opening: 400, closing: 550 },
                { name: "GAIL", opening: 450, closing: 600 },
                { name: "ONGC", opening: 500, closing: 650 },
                { name: "Indian Oil Corporation Ltd", opening: 550, closing: 700 },
                { name: "SAIL", opening: 600, closing: 750 }
            ],
            "ST": [
                { name: "BHEL", opening: 350, closing: 500 },
                { name: "IOCL", opening: 400, closing: 550 },
                { name: "NTPC", opening: 450, closing: 600 },
                { name: "GAIL", opening: 500, closing: 650 },
                { name: "ONGC", opening: 550, closing: 700 },
                { name: "Indian Oil Corporation Ltd", opening: 600, closing: 750 },
                { name: "SAIL", opening: 650, closing: 800 }
            ]
        }
    },
    "CE": {
        "IIT": {
            "General": [
                { name: "IIT Bombay", opening: 50, closing: 150 },
                { name: "IIT Delhi", opening: 100, closing: 200 },
                { name: "IIT Kanpur", opening: 150, closing: 250 },
                { name: "IIT Kharagpur", opening: 200, closing: 300 },
                { name: "IIT Madras", opening: 250, closing: 350 },
                { name: "IIT Roorkee", opening: 300, closing: 400 },
                { name: "IIT Guwahati", opening: 350, closing: 450 }
            ],
            "OBC": [
                { name: "IIT Bombay", opening: 100, closing: 200 },
                { name: "IIT Delhi", opening: 150, closing: 250 },
                { name: "IIT Kanpur", opening: 200, closing: 300 },
                { name: "IIT Kharagpur", opening: 250, closing: 350 },
                { name: "IIT Madras", opening: 300, closing: 400 },
                { name: "IIT Roorkee", opening: 350, closing: 450 },
                { name: "IIT Guwahati", opening: 400, closing: 500 }
            ],
            "EWS": [
                { name: "IIT Bombay", opening: 75, closing: 175 },
                { name: "IIT Delhi", opening: 125, closing: 225 },
                { name: "IIT Kanpur", opening: 175, closing: 275 },
                { name: "IIT Kharagpur", opening: 225, closing: 325 },
                { name: "IIT Madras", opening: 275, closing: 375 },
                { name: "IIT Roorkee", opening: 325, closing: 425 },
                { name: "IIT Guwahati", opening: 375, closing: 475 }
            ],
            "SC": [
                { name: "IIT Bombay", opening: 200, closing: 300 },
                { name: "IIT Delhi", opening: 250, closing: 350 },
                { name: "IIT Kanpur", opening: 300, closing: 400 },
                { name: "IIT Kharagpur", opening: 350, closing: 450 },
                { name: "IIT Madras", opening: 400, closing: 500 },
                { name: "IIT Roorkee", opening: 450, closing: 550 },
                { name: "IIT Guwahati", opening: 500, closing: 600 }
            ],
            "ST": [
                { name: "IIT Bombay", opening: 250, closing: 350 },
                { name: "IIT Delhi", opening: 300, closing: 400 },
                { name: "IIT Kanpur", opening: 350, closing: 450 },
                { name: "IIT Kharagpur", opening: 400, closing: 500 },
                { name: "IIT Madras", opening: 450, closing: 550 },
                { name: "IIT Roorkee", opening: 500, closing: 600 },
                { name: "IIT Guwahati", opening: 550, closing: 650 }
            ]
        },
        "NIT": {
            "General": [
                { name: "NIT Trichy", opening: 200, closing: 350 },
                { name: "NIT Surathkal", opening: 250, closing: 400 },
                { name: "NIT Warangal", opening: 300, closing: 450 },
                { name: "NIT Calicut", opening: 350, closing: 500 },
                { name: "NIT Rourkela", opening: 400, closing: 550 },
                { name: "NIT Kurukshetra", opening: 450, closing: 600 },
                { name: "NIT Durgapur", opening: 500, closing: 650 }
            ],
            "OBC": [
                { name: "NIT Trichy", opening: 250, closing: 400 },
                { name: "NIT Surathkal", opening: 300, closing: 450 },
                { name: "NIT Warangal", opening: 350, closing: 500 },
                { name: "NIT Calicut", opening: 400, closing: 550 },
                { name: "NIT Rourkela", opening: 450, closing: 600 },
                { name: "NIT Kurukshetra", opening: 500, closing: 650 },
                { name: "NIT Durgapur", opening: 550, closing: 700 }
            ],
            "EWS": [
                { name: "NIT Trichy", opening: 225, closing: 375 },
                { name: "NIT Surathkal", opening: 275, closing: 425 },
                { name: "NIT Warangal", opening: 325, closing: 475 },
                { name: "NIT Calicut", opening: 375, closing: 525 },
                { name: "NIT Rourkela", opening: 425, closing: 575 },
                { name: "NIT Kurukshetra", opening: 475, closing: 625 },
                { name: "NIT Durgapur", opening: 525, closing: 675 }
            ],
            "SC": [
                { name: "NIT Trichy", opening: 350, closing: 500 },
                { name: "NIT Surathkal", opening: 400, closing: 550 },
                { name: "NIT Warangal", opening: 450, closing: 600 },
                { name: "NIT Calicut", opening: 500, closing: 650 },
                { name: "NIT Rourkela", opening: 550, closing: 700 },
                { name: "NIT Kurukshetra", opening: 600, closing: 750 },
                { name: "NIT Durgapur", opening: 650, closing: 800 }
            ],
            "ST": [
                { name: "NIT Trichy", opening: 400, closing: 550 },
                { name: "NIT Surathkal", opening: 450, closing: 600 },
                { name: "NIT Warangal", opening: 500, closing: 650 },
                { name: "NIT Calicut", opening: 550, closing: 700 },
                { name: "NIT Rourkela", opening: 600, closing: 750 },
                { name: "NIT Kurukshetra", opening: 650, closing: 800 },
                { name: "NIT Durgapur", opening: 700, closing: 850 }
            ]
        },
        "PSU": {
            "General": [
                { name: "NTPC", opening: 100, closing: 200 },
                { name: "BHEL", opening: 150, closing: 250 },
                { name: "Indian Oil Corporation Limited", opening: 200, closing: 300 },
                { name: "Power Grid Corporation of India", opening: 250, closing: 350 },
                { name: "ONGC", opening: 300, closing: 400 },
                { name: "SAIL", opening: 350, closing: 450 },
                { name: "GAIL", opening: 400, closing: 500 }
            ],
            "OBC": [
                { name: "NTPC", opening: 150, closing: 250 },
                { name: "BHEL", opening: 200, closing: 300 },
                { name: "Indian Oil Corporation Limited", opening: 250, closing: 350 },
                { name: "Power Grid Corporation of India", opening: 300, closing: 400 },
                { name: "ONGC", opening: 350, closing: 450 },
                { name: "SAIL", opening: 400, closing: 500 },
                { name: "GAIL", opening: 450, closing: 550 }
            ],
            "EWS": [
                { name: "NTPC", opening: 125, closing: 225 },
                { name: "BHEL", opening: 175, closing: 275 },
                { name: "Indian Oil Corporation Limited", opening: 225, closing: 325 },
                { name: "Power Grid Corporation of India", opening: 275, closing: 375 },
                { name: "ONGC", opening: 325, closing: 425 },
                { name: "SAIL", opening: 375, closing: 475 },
                { name: "GAIL", opening: 425, closing: 525 }
            ],
            "SC": [
                { name: "NTPC", opening: 250, closing: 350 },
                { name: "BHEL", opening: 300, closing: 400 },
                { name: "Indian Oil Corporation Limited", opening: 350, closing: 450 },
                { name: "Power Grid Corporation of India", opening: 400, closing: 500 },
                { name: "ONGC", opening: 450, closing: 550 },
                { name: "SAIL", opening: 500, closing: 600 },
                { name: "GAIL", opening: 550, closing: 650 }
            ],
            "ST": [
                { name: "NTPC", opening: 300, closing: 400 },
                { name: "BHEL", opening: 350, closing: 450 },
                { name: "Indian Oil Corporation Limited", opening: 400, closing: 500 },
                { name: "Power Grid Corporation of India", opening: 450, closing: 550 },
                { name: "ONGC", opening: 500, closing: 600 },
                { name: "SAIL", opening: 550, closing: 650 },
                { name: "GAIL", opening: 600, closing: 700 }
            ]
        }
    },
    "EE": {
        "IIT": {
            "General": [
                { name: "IIT Bombay", opening: 50, closing: 150 },
                { name: "IIT Delhi", opening: 70, closing: 180 },
                { name: "IIT Kanpur", opening: 100, closing: 200 },
                { name: "IIT Kharagpur", opening: 120, closing: 220 },
                { name: "IIT Madras", opening: 140, closing: 240 },
                { name: "IIT Roorkee", opening: 160, closing: 260 },
                { name: "IIT BHU (Varanasi)", opening: 180, closing: 280 }
            ],
            "OBC": [
                { name: "IIT Bombay", opening: 100, closing: 200 },
                { name: "IIT Delhi", opening: 120, closing: 220 },
                { name: "IIT Kanpur", opening: 150, closing: 250 },
                { name: "IIT Kharagpur", opening: 170, closing: 270 },
                { name: "IIT Madras", opening: 190, closing: 290 },
                { name: "IIT Roorkee", opening: 210, closing: 310 },
                { name: "IIT BHU (Varanasi)", opening: 230, closing: 330 }
            ],
            "EWS": [
                { name: "IIT Bombay", opening: 75, closing: 175 },
                { name: "IIT Delhi", opening: 95, closing: 195 },
                { name: "IIT Kanpur", opening: 125, closing: 225 },
                { name: "IIT Kharagpur", opening: 145, closing: 245 },
                { name: "IIT Madras", opening: 165, closing: 265 },
                { name: "IIT Roorkee", opening: 185, closing: 285 },
                { name: "IIT BHU (Varanasi)", opening: 205, closing: 305 }
            ],
            "SC": [
                { name: "IIT Bombay", opening: 200, closing: 300 },
                { name: "IIT Delhi", opening: 220, closing: 320 },
                { name: "IIT Kanpur", opening: 250, closing: 350 },
                { name: "IIT Kharagpur", opening: 270, closing: 370 },
                { name: "IIT Madras", opening: 290, closing: 390 },
                { name: "IIT Roorkee", opening: 310, closing: 410 },
                { name: "IIT BHU (Varanasi)", opening: 330, closing: 430 }
            ],
            "ST": [
                { name: "IIT Bombay", opening: 250, closing: 350 },
                { name: "IIT Delhi", opening: 270, closing: 370 },
                { name: "IIT Kanpur", opening: 300, closing: 400 },
                { name: "IIT Kharagpur", opening: 320, closing: 420 },
                { name: "IIT Madras", opening: 340, closing: 440 },
                { name: "IIT Roorkee", opening: 360, closing: 460 },
                { name: "IIT BHU (Varanasi)", opening: 380, closing: 480 }
            ]
        },
        "NIT": {
            "General": [
                { name: "NIT Trichy", opening: 500, closing: 600 },
                { name: "NIT Surathkal", opening: 600, closing: 700 },
                { name: "NIT Warangal", opening: 650, closing: 750 },
                { name: "NIT Rourkela", opening: 700, closing: 800 },
                { name: "NIT Calicut", opening: 750, closing: 850 },
                { name: "NIT Durgapur", opening: 800, closing: 900 },
                { name: "NIT Jaipur", opening: 850, closing: 950 }
            ],
            "OBC": [
                { name: "NIT Trichy", opening: 550, closing: 650 },
                { name: "NIT Surathkal", opening: 650, closing: 750 },
                { name: "NIT Warangal", opening: 700, closing: 800 },
                { name: "NIT Rourkela", opening: 750, closing: 850 },
                { name: "NIT Calicut", opening: 800, closing: 900 },
                { name: "NIT Durgapur", opening: 850, closing: 950 },
                { name: "NIT Jaipur", opening: 900, closing: 1000 }
            ],
            "EWS": [
                { name: "NIT Trichy", opening: 525, closing: 625 },
                { name: "NIT Surathkal", opening: 625, closing: 725 },
                { name: "NIT Warangal", opening: 675, closing: 775 },
                { name: "NIT Rourkela", opening: 725, closing: 825 },
                { name: "NIT Calicut", opening: 775, closing: 875 },
                { name: "NIT Durgapur", opening: 825, closing: 925 },
                { name: "NIT Jaipur", opening: 875, closing: 975 }
            ],
            "SC": [
                { name: "NIT Trichy", opening: 700, closing: 800 },
                { name: "NIT Surathkal", opening: 800, closing: 900 },
                { name: "NIT Warangal", opening: 850, closing: 950 },
                { name: "NIT Rourkela", opening: 900, closing: 1000 },
                { name: "NIT Calicut", opening: 950, closing: 1050 },
                { name: "NIT Durgapur", opening: 1000, closing: 1100 },
                { name: "NIT Jaipur", opening: 1050, closing: 1150 }
            ],
            "ST": [
                { name: "NIT Trichy", opening: 800, closing: 900 },
                { name: "NIT Surathkal", opening: 900, closing: 1000 },
                { name: "NIT Warangal", opening: 950, closing: 1050 },
                { name: "NIT Rourkela", opening: 1000, closing: 1100 },
                { name: "NIT Calicut", opening: 1050, closing: 1150 },
                { name: "NIT Durgapur", opening: 1100, closing: 1200 },
                { name: "NIT Jaipur", opening: 1150, closing: 1250 }
            ]
        },
        "PSU": {
            "General": [
                { name: "BHEL", opening: 100, closing: 200 },
                { name: "IOCL", opening: 120, closing: 220 },
                { name: "NTPC", opening: 150, closing: 250 },
                { name: "PGCIL", opening: 180, closing: 280 },
                { name: "BPCL", opening: 200, closing: 300 },
                { name: "ONGC", opening: 220, closing: 320 },
                { name: "GAIL", opening: 250, closing: 350 }
            ],
            "OBC": [
                { name: "BHEL", opening: 150, closing: 250 },
                { name: "IOCL", opening: 170, closing: 270 },
                { name: "NTPC", opening: 200, closing: 300 },
                { name: "PGCIL", opening: 230, closing: 330 },
                { name: "BPCL", opening: 250, closing: 350 },
                { name: "ONGC", opening: 270, closing: 370 },
                { name: "GAIL", opening: 300, closing: 400 }
            ],
            "EWS": [
                { name: "BHEL", opening: 130, closing: 230 },
                { name: "IOCL", opening: 150, closing: 250 },
                { name: "NTPC", opening: 180, closing: 280 },
                { name: "PGCIL", opening: 210, closing: 310 },
                { name: "BPCL", opening: 230, closing: 330 },
                { name: "ONGC", opening: 250, closing: 350 },
                { name: "GAIL", opening: 280, closing: 380 }
            ],
            "SC": [
                { name: "BHEL", opening: 250, closing: 350 },
                { name: "IOCL", opening: 270, closing: 370 },
                { name: "NTPC", opening: 300, closing: 400 },
                { name: "PGCIL", opening: 330, closing: 430 },
                { name: "BPCL", opening: 350, closing: 450 },
                { name: "ONGC", opening: 370, closing: 470 },
                { name: "GAIL", opening: 400, closing: 500 }
            ],
            "ST": [
                { name: "BHEL", opening: 300, closing: 400 },
                { name: "IOCL", opening: 320, closing: 420 },
                { name: "NTPC", opening: 350, closing: 450 },
                { name: "PGCIL", opening: 380, closing: 480 },
                { name: "BPCL", opening: 400, closing: 500 },
                { name: "ONGC", opening: 420, closing: 520 },
                { name: "GAIL", opening: 450, closing: 550 }
            ]
        }
    }
    }
};

// Function to handle form submission
document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get selected options
    const year = document.getElementById("year").value;
    const branch = document.getElementById("branch").value;
    const categoryType = document.getElementById("categoryType").value;
    const reservation = document.getElementById("reservation").value;

    // Get results based on selected filters
    const results = rankData[year]?.[branch]?.[categoryType]?.[reservation] || [];
    const tableBody = document.getElementById("resultTable");

    // Clear previous results
    tableBody.innerHTML = "";

    // Populate table with results
    if (results.length > 0) {
        results.forEach(result => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${result.name}</td>
                <td>${reservation}</td>
                <td>${result.opening}</td>
                <td>${result.closing}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        const row = document.createElement("tr");
        row.innerHTML = `<td colspan="4">No data available for the selected criteria.</td>`;
        tableBody.appendChild(row);
    }
});
