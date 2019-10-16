//document.getElementById('submit').addEventListener('click', result);

function result() {
    let sizeInstance = new Canopy();
    size = sizeInstance.weightAndJumps().jumpsPerYear().dropzoneAltitude().ellipticalCanopy().size;

    document.getElementById('result').innerHTML = size;

    return false;
} 


class Canopy {
    constructor() {
        this.size = 0;
        this.weight = document.getElementById('weight').value;
        this.jumps = document.getElementById('jumps').value;
        this.jumpsperyear = document.getElementById('jumpsperyear').value;
        this.altitude = document.getElementById('altitude').value;
    }

    weightAndJumps() {

        if (this.weight <= 65) {
            if (this.jumps < 20) {
                this.size = 190;
                return this;
            }
            else if (this.jumps >=20 && this.jumps < 100) {
                this.size = 170;
                return this;
            }
            else if (this.jumps >=100 && this.jumps < 200) {
                this.size = 150;
                return this;
            }
            else if (this.jumps >=200 && this.jumps < 500) {
                this.size = 135;
                return this;
            } 
        }

        else if (this.weight > 65 && this.weight <= 70) {
            if (this.jumps < 40) {
                this.size = 190;
                return this;
            }
            else if (this.jumps >= 40 && this.jumps < 120) {
                this.size = 170;
                return this;
            }
            else if (this.jumps >= 120 && this.jumps < 220) {
                this.size = 150;
                return this;
            }
            else if (this.jumps >= 220 && this.jumps < 500) {
                this.size = 135;
                return this;
            }
        }

        else if (this.weight > 70 && this.weight <= 75) {
            if (this.jumps < 100) {
                this.size = 190;
                return this;
            }
            else if (this.jumps >= 100 && this.jumps < 180) {
                this.size = 170;
                return this;
            }
            else if (this.jumps >= 180 && this.jumps < 280) {
                this.size = 150;
                return this;
            }
            else if (this.jumps >= 280 && this.jumps < 500) {
                this.size = 135;
                return this;
            }
        }

        else if (this.weight > 75 && this.weight <= 80) {
            if (this.jumps < 60) {
                this.size = 210;
                return this;
            }
            else if (this.jumps >= 60 && this.jumps < 160) {
                this.size = 190;
                return this;
            }
            else if (this.jumps >= 160 && this.jumps < 240) {
                this.size = 170;
                return this;
            }
            else if (this.jumps >= 240 && this.jumps < 340) {
                this.size = 150;
                return this;
            }
            else if (this.jumps >= 340 && this.jumps < 500) {
                this.size = 135;
                return this;
            }
        }

        else if (this.weight > 80 && this.weight <= 85) {
            if (this.jumps < 100) {
                this.size = 210;
                return this;
            }
            else if (this.jumps >= 100 && this.jumps < 200) {
                this.size = 190;
                return this;
            }
            else if (this.jumps >= 200 && this.jumps < 300) {
                this.size = 170;
                return this;
            }
            else if (this.jumps >= 300 && this.jumps < 400) {
                this.size = 150;
                return this;
            }
            else if (this.jumps >= 400 && this.jumps < 500) {
                this.size = 135;
                return this;
            }
        }

        else if (this.weight > 85 && this.weight <= 90) {
            if (this.jumps < 60) {
                this.size = 230;
                return this;
            }
            else if (this.jumps >= 60 && this.jumps < 140) {
                this.size = 210;
                return this;
            }
            else if (this.jumps >= 140 && this.jumps < 260) {
                this.size = 190;
                return this;
            }
            else if (this.jumps >= 260 && this.jumps < 340) {
                this.size = 170;
                return this;
            }
            else if (this.jumps >= 340 && this.jumps < 460) {
                this.size = 150;
                return this;
            }
            else if (this.jumps >= 460 && this.jumps < 500) {
                this.size = 135;
                return this;
            }
        }

        else if (this.weight > 90 && this.weight <= 95) {
            if (this.jumps < 100) {
                this.size = 230;
                return this;
            }
            else if (this.jumps >= 100 && this.jumps < 200) {
                this.size = 210;
                return this;
            }
            else if (this.jumps >= 200 && this.jumps < 300) {
                this.size = 190;
                return this;
            }
            else if (this.jumps >= 300 && this.jumps < 400) {
                this.size = 170;
                return this;
            }
            else if (this.jumps >= 400 && this.jumps < 500) {
                this.size = 150;
                return this;
            }
        }

        else if (this.weight > 95 && this.weight <= 100) {
            if (this.jumps < 120) {
                this.size = 230;
                return this;
            }
            else if (this.jumps >= 120 && this.jumps < 140) {
                this.size = 220;
                return this;
            }
            else if (this.jumps >= 140 && this.jumps < 240) {
                this.size = 210;
                return this;
            }
            else if (this.jumps >= 240 && this.jumps < 340) {
                this.size = 190;
                return this;
            }
            else if (this.jumps >= 340 && this.jumps < 440) {
                this.size = 170;
                return this;
            }
            else if (this.jumps >= 440 && this.jumps < 500) {
                this.size = 150;
                return this;
            }
        }

        else if (this.weight > 100 && this.weight <= 105) {
            if (this.jumps < 20) {
                this.size = 260;
                return this;
            }
            else if (this.jumps >= 20 && this.jumps < 180) {
                this.size = 230;
                return this;
            }
            else if (this.jumps >= 180 && this.jumps < 280) {
                this.size = 210;
                return this;
            }
            else if (this.jumps >= 280 && this.jumps < 380) {
                this.size = 190;
                return this;
            }
            else if (this.jumps >= 380 && this.jumps < 490) {
                this.size = 170;
                return this;
            }
            else if (this.jumps >= 490 && this.jumps < 500) {
                this.size = 150;
                return this;
            }
        }

        else if (this.weight > 105 && this.weight <= 110) {
            if (this.jumps < 20) {
                this.size = 260;
                return this;
            }
            else if (this.jumps >= 20 && this.jumps < 220) {
                this.size = 230;
                return this;
            }
            else if (this.jumps >= 220 && this.jumps < 320) {
                this.size = 210;
                return this;
            }
            else if (this.jumps >= 320 && this.jumps < 420) {
                this.size = 190;
                return this;
            }
            else if (this.jumps >= 420 && this.jumps < 500) {
                this.size = 170;
                return this;
            }
        }

        else if (this.weight > 110 && this.weight <= 115) {
            if (this.jumps < 20) {
                this.size = 260;
                return this;
            }
            else if (this.jumps >= 20 && this.jumps < 260) {
                this.size = 230;
                return this;
            }
            else if (this.jumps >= 260 && this.jumps < 340) {
                this.size = 210;
                return this;
            }
            else if (this.jumps >= 340 && this.jumps < 480) {
                this.size = 190;
                return this;
            }
            else if (this.jumps >= 480 && this.jumps < 500) {
                this.size = 170;
                return this;
            }
        }

        else if (this.weight > 115 && this.weight <= 120) {
            if (this.jumps < 20) {
                this.size = 260;
                return this;
            }
            else if (this.jumps >= 20 && this.jumps < 300) {
                this.size = 230;
                return this;
            }
            else if (this.jumps >= 300 && this.jumps < 400) {
                this.size = 210;
                return this;
            }
            else if (this.jumps >= 400 && this.jumps < 490) {
                this.size = 190;
                return this;
            }
            else if (this.jumps >= 490 && this.jumps < 500) {
                this.size = 170;
                return this;
            }
        }
    }

    jumpsPerYear() {
        if (this.jumpsperyear < 50) {
            this.size += 30;
            return this;
        }
        else if (this.jumpsperyear >= 50 && this.jumpsperyear < 100) {
            this.size += 15;
            return this;
        }
        else {
            return this;
        }
    }

    dropzoneAltitude() {
        let multiplier = Math.round(this.altitude / 610);
        this.size += multiplier * 10;
        return this;
    }

    ellipticalCanopy() {
        if (document.getElementById('ellipticalYes').checked) {
            if (this.jumps < 300) {
                document.getElementById('errorElliptical').innerHTML = 'Nie powinieneś skakać na eliptycznej czaszy jeśli masz mniej niż 300 skoków';
                return false;
            }
            else {
                this.size += 20;
                return this;
            }
        }
        else if (document.getElementById('ellipticalNo').checked) {
            return this;
        }
    }
}



