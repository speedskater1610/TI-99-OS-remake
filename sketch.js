class ASMreg {
    constructor (num) {
        this.num = num;
    }
}

//arry off all of the lines
let lines = [];
//line history
let history = [];
//current line being printed
let currentLine = '';

//images
let startImage;
let selectImage;
let three;
let fourANDfive;

//weter started or not
let started = false;

//why screen is displayed
let selectScreen = false;
let terminalScreen = false;
let customBackground = false; // new variable to track if we're in custom mode


// backgroud color at the time
let backgroundColor;//this is used for setting
let BGcolor; //this is used for when the ode is selected 

// text color
let textColor;

//line # for ASM this shoudl update every new line
let lineNumASM = 0;

//weater asm or basic
let type;

//asm files 
let Afile1;
let Afile2;
let Afile3;
let Afile4;
let Afile5;
let Afile6;
let Afile7;
let Afile8;
let Afile9;

//basic files
let Bfile1;
let Bfile2;
let Bfile3;
let Bfile4;
let Bfile5;
let Bfile6;
let Bfile7;
let Bfile8;
let Bfile9;

//file to grpah
let graphFile;

//graphing
let selectScreenColor;
let graph;
let oneThroughNine;

let graphReady = false;
graphReadySelect =  false;

let whatFileToGraph;

//text files 
let Tfile1;
let Tfile2;
let Tfile3;
let Tfile4;
let Tfile5;
let Tfile6;
let Tfile7;
let Tfile8;
let Tfile9;

//104 memory adress for graphing
//set each memeoory adress to space for no aka 040 is oct ascii
let m001 = " ";
let m002 = " ";
let m003 = " ";
let m004 = " ";
let m005 = " ";
let m006 = " ";
let m007 = " ";
let m008 = " ";
let m009 = " ";
let m010 = " ";
let m011 = " ";
let m012 = " ";
let m013 = " ";
let m014 = " ";
let m015 = " ";
let m016 = " ";
let m017 = " ";
let m018 = " ";
let m019 = " ";
let m020 = " ";
let m021 = " ";
let m022 = " ";
let m023 = " ";
let m024 = " ";
let m025 = " ";
let m026 = " ";
let m027 = " ";
let m028 = " ";
let m029 = " ";
let m030 = " ";
let m031 = " ";
let m032 = " ";
let m033 = " ";
let m034 = " ";
let m035 = " ";
let m036 = " ";
let m037 = " ";
let m038 = " ";
let m039 = " ";
let m040 = " ";
let m041 = " ";
let m042 = " ";
let m043 = " ";
let m044 = " ";
let m045 = " ";
let m046 = " ";
let m047 = " ";
let m048 = " ";
let m049 = " ";
let m050 = " ";
let m051 = " ";
let m052 = " ";
let m053 = " ";
let m054 = " ";
let m055 = " ";
let m056 = " ";
let m057 = " ";
let m058 = " ";
let m059 = " ";
let m060 = " ";
let m061 = " ";
let m062 = " ";
let m063 = " ";
let m064 = " ";
let m065 = " ";
let m066 = " ";
let m067 = " ";
let m068 = " ";
let m069 = " ";
let m070 = " ";
let m071 = " ";
let m072 = " ";
let m073 = " ";
let m074 = " ";
let m075 = " ";
let m076 = " ";
let m077 = " ";
let m078 = " ";
let m079 = " ";
let m080 = " ";
let m081 = " ";
let m082 = " ";
let m083 = " ";
let m084 = " ";
let m085 = " ";
let m086 = " ";
let m087 = " ";
let m088 = " ";
let m089 = " ";
let m090 = " ";
let m091 = " ";
let m092 = " ";
let m093 = " ";
let m094 = " ";
let m095 = " ";
let m096 = " ";
let m097 = " ";
let m098 = " ";
let m099 = " ";
let m100 = " ";
let m101 = " ";
let m102 = " ";
let m103 = " ";
let m104 = " ";

//mabye  make some preloaded games for the user
let organTrail = [
    
];


function preload() {
    startImage = loadImage('start.png');  // atart image
    selectImage = loadImage('select.png');  // select screen 1||2
    
    //these go on the select image as other options
    three = loadImage('./img/3.png');
    fourANDfive = loadImage('./img/4&5.png');
    
    
    //graphing images
    selectScreenColor = loadImage("./img/blue.png")
    graph = loadImage("./img/grid.png")
    oneThroughNine = loadImage("./img/fileS.png")
}

function setup() {
    createCanvas(600, 400);
    textSize(20);
    noStroke();
}

function draw() {
    if (type == "BASIC_G") {
        //clear the screen
        clear();
        lines = [];
        terminalScreen  = false;
        
        
        
        //enter slect screen
        image(selectScreenColor, 0, 0, width, height);
        image(oneThroughNine, 0, 0, 600, 100);
        
        
        //check if file has been selected 
        if (graphReady) {
            //graph
            image(graph, 0,0, width,height);
            
            text(m001,0,0);
        }
    } 
    
    if (!started) {
        image(startImage, 0, 0, width, height);
    } else if (selectScreen) {
        // show the selection screen
        image(selectImage, 0, 0, width, height);
        fill(0);
        image(three, 117, 180);
        image(fourANDfive, 117, 202 );
    } else if (terminalScreen) {
        // change background color is asm  is selected
        if (customBackground) {
            backgroundColor = BGcolor; //asm color & text termial and extra programs
            background(backgroundColor);
        } else {
            //BGcolor
            backgroundColor=color(0, 251, 255); // light blue in basic
            background(backgroundColor); 
        }

        fill(20);
        
        let y = 30;
        if (type == "ASM") {
            for (let i = 0; i < lines.length; i++) {
                let prefix = lines[i].user ? "- " : '';
                text(prefix + lines[i].text, 10, y);
                y += 24;
            }
        } else {
            for (let i = 0; i < lines.length; i++) {
                let prefix = lines[i].user ? '> ' : '';
                text(prefix + lines[i].text, 10, y);
                y += 24;
            }
        }
        
        
        
        let cursor;
        
        if (type == "BASIC") {
            cursor = millis() % 1000 < 500 ? "▓" : ""; // or this if  wanted full block█
            text('> ' + currentLine + cursor, 10, y);
        } else 
        
        if (type == "ASM") {
            cursor = millis() % 1000 < 500 ? '_' : '';
            text(lineNumASM + currentLine + cursor, 10, y);
        } else 
        
        if (type == "TEXT") {
            cursor = millis() % 1000 < 500 ? '|' : '';
            text("" + currentLine + cursor, 10, y);
        } else
        if (type == "TERM") {
            cursor = millis() % 1000 < 500 ? "█" : "_";
            text("./USER/TERMINAL//> " + currentLine + cursor, 10, y);
        }
        if (type == "PRO") {
            cursor = millis() % 1000 < 500 ? "█" : "_";
            text("./PROGRAM_NAME > " + currentLine + cursor, 10, y);
        }
    }
}

function keyPressed() {
    if (type == "BASIC_G") {
        switch (key) {
            case "1":
                whatFileToGraph = "1";
                graphReady = true;
                break;
            case "2":
                whatFileToGraph = "2";
                graphReady = true;
                break;
            case "3":
                whatFileToGraph = "3";
                graphReady = true;
                break;
            case "4":
                whatFileToGraph = "4";
                graphReady = true;
                break;
            case "5":
                whatFileToGraph = "5";
                graphReady = true;
                break;
            case "6":
                whatFileToGraph = "6";
                graphReady = true;
                break;
            case "7":
                whatFileToGraph = "7";
                graphReady = true;
                break;
            case "8":
                whatFileToGraph = "8";
                graphReady = true;
                break;
            case "9":
                whatFileToGraph = "9";
                graphReady = true;
                break;
        }
        if (key === "z") {
            type = "BASIC";
        }
    }
    
    if (!started) {
        started = true;
        selectScreen = true;
    } else if (selectScreen) {
        // if on the selection screen handle user input to select 1 or 2  (BASIC or ASM)
        if (key === '1') {
            selectScreen = false;
            terminalScreen = true;
            customBackground = false;  // keep default background color (the blue thing)
            
            type = "BASIC";
            
            lines.push({text:"** BASIC **", user: false});
        } else if (key === '2') {
            // reset everything when going to the assembler screen becuase it isnt needed and needs to be changed
            lines = [];
            history = [];
            currentLine = '';
            selectScreen = false;
            terminalScreen = true;
            customBackground = true;  // set custom background color to purpleliek the origial ti 99 ASM add  on
            
            //rgb color of background
            BGcolor = color(161, 141, 255);
            textColor = color(0, 0, 0);
            
            type = "ASM";
            
            lines.push({text:"= = = ASM = = =", user: false});
        } else if (key === '3') {
            //def what the termial is for
            //text editor
            type = "TEXT";
            lines = [];
            history = [];
            currentLine = '';
            selectScreen = false;
            terminalScreen = true;
            customBackground = true;
            
            //rgb color of background
            BGcolor = color(230, 230, 230);
            textColor = color(255, 255, 255);
            
            lines.push({text:"** TEXT EDITOR **", user: false});
        } else if (key === "4") {
            //def what the termial is for
            //overall terminal
            type = "TERM";
            
            lines = [];
            history = [];
            currentLine = '';
            selectScreen = false;
            terminalScreen = true;
            customBackground = true;
            
            //rgb color of background
            BGcolor = color(200, 200, 200); //black
            textColor = color(0, 255, 0);  // neon green
            lines.push({text:"** TERMINAL **", user: false});
        } else if (key === "5") {
            //def what the termial is for
            //programs
            type = "PRO";
            
            lines = [];
            history = [];
            currentLine = '';
            selectScreen = false;
            terminalScreen = true;
            customBackground = true;
            
            //rgb color of background
            BGcolor = color(200, 200, 200); //black
            textColor = color(0, 255, 0);  // neon green
            
            
            lines.push({text:"** PROGRAM SELECTOR **", user: false});
        }
    } else if (terminalScreen) {
        if (keyCode === BACKSPACE) {
            currentLine = currentLine.slice(0, -1);  
        } else if (keyCode === ENTER) {
            const userEntry = { text: currentLine, user: true };
            lines.push(userEntry);
            history.push(userEntry);
            handleCommand(currentLine);
            currentLine = '';
            
            
            //check how many lines
            if (lines.length > 20) {
                lines.shift();
            }
        } else if (key.length === 1) {
            currentLine += key;
        }
    }
}

function handleCommand(command) {
    //select game/program
    if (type == "PRO") {
        if (command.toLowerCase() == "#list" || command.toLowerCase == "#help") {
            
        } else
        if (command == "BASIC" || command == "basic") {
            type = "BASIC";
        } else 
        if (command == "ASM" || command == "asm") {
            type = "ASM";
        }
    }
    
    //disffrent possible commands the usser can send
    //first check if in ASM or BASIC then commands will be diffren t
    if (type == "BASIC") {
        
        //show everthing the user enetered
        if (command === 'list') {
            //sort and display
            BASICsort();
        //just clear the screen
        } else if (command === 'call clear') {
            lines = []; 
        } else 
        // clear everything
        if (command === "new") {
            lines = [];
            history = [];
            currentLine = '';
        } else 
        //run the compileBASIC function
        if (command === "run") {
            console.log(history);
            lines = [];
            
            compileBASIC();
            lines.push({text: compileBASIC(history.filter(item => /^[0-9]/.test(item))), user: false });
        } else 
        
        //all of thwe file save they can start without a # bvecasue asm doesnt have all of the lines startw ith a num but basic does so anything that doesnt start with a num is considered a terminal command
        if (command === "save file1") {
            Bfile1 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Bfile1.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
            console.log(Afile1);
        }else
        if (command === "save file2") {
            Bfile2 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Bfile2.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "save file3") {
            Bfile3 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Bfile3.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "save file4") {
            Bfile4 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Bfile4.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "save file5") {
            Bfile5 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Bfile5.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "save file6") {
            Bfile6 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Bfile6.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "save file7") {
            Bfile7 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Bfile7.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "save file8") {
            Bfile8 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Bfile8.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "save file9") {
            Bfile9 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Bfile9.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }
        
        //load
        //let lines equal the file enetered
        if (command === "load file1") {
            lines = Bfile1;
        }else
        if (command === "load file2") {
            lines = Bfile2;
        }else
        if (command === "load file3") {
            lines = Bfile3;
        }else
        if (command === "load file4") {
            lines = Bfile4;
        }else
        if (command === "load file5") {
            lines = Bfile5;
        }else
        if (command === "load file6") {
            lines = Bfile6;
        }else
        if (command === "load file7") {
            lines = Bfile7;
        }else
        if (command === "load file8") {
            lines = Bfile8;
        }else
        if (command === "load file9") {
            lines = Bfile9;
        }
        
        //let user enter graphics mode
        if (command == "enterG") {
            type ="BASIC_G"; // type is now basic grpahics
            graphReadySelect =  true;
        }
    }
    
    //BASIC graphics
    if (type == "BASIC_G") {
        if (command == "leave") {
            type="BASIC";
        }
    }
    
    
    //ASM
    // now if it is asm
    if (type == "ASM") {
        //clear the screen
        if (command === '#clear') {
            lines = []; 
        }
        
        //all of the save files then clear the screen
        // save only lines that start with a number and sort them
        
        // i have almost no idea whagt this does i found something on stack over flow where  i just modifed it to a soace and my vafrible names
        //i ahve a small overview of how it works but there is no way that i could replicztde this from memory as of now
        if (command === "#save file1") {
            Afile1 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile1.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
            console.log(Afile1);
        }else
        if (command === "#save file2") {
            Afile2 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile2.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "#save file3") {
            Afile3 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile3.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "#save file4") {
            Afile4 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile4.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "#save file5") {
            Afile5 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile5.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "#save file6") {
            Afile6 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile6.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "#save file7") {
            Afile7 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile7.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "#save file8") {
            Afile8 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile8.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "#save file9") {
            Afile9 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile9.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }
        
        //load
        //let lines equal the file enetered
        if (command === "#load file1") {
            lines = Afile1;
        }else
        if (command === "#load file2") {
            lines = Afile2;
        }else
        if (command === "#load file3") {
            lines = Afile3;
        }else
        if (command === "#load file4") {
            lines = Afile4;
        }else
        if (command === "#load file5") {
            lines = Afile5;
        }else
        if (command === "#load file6") {
            lines = Afile6;
        }else
        if (command === "#load file7") {
            lines = Afile7;
        }else
        if (command === "#load file8") {
            lines = Afile8;
        }else
        if (command === "#load file9") {
            lines = Afile9;
        }
        
        if (command !== '#clear') {
            lineNumASM++;
        }
        
    } if (type == "TEXT") {
        //clear the screen
        if (command === '#clear') {
            lines = []; 
        } else
        if (command === "#new") {
            history = [];
        } else
        //all of the save files then clear the screen
        // save only lines that start with a number and sort them
        
        // i have almost no idea whagt this does i found something on stack over flow where  i just modifed it to a soace and my vafrible names
        //i ahve a small overview of how it works but there is no way that i could replicztde this from memory as of now
        if (command === "#save file1") {
            Afile1 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile1.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
            console.log(Afile1);
        }else
        if (command === "#save file2") {
            Afile2 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile2.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "#save file3") {
            Afile3 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile3.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "#save file4") {
            Afile4 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile4.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "#save file5") {
            Afile5 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile5.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "#save file6") {
            Afile6 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile6.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "#save file7") {
            Afile7 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile7.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "#save file8") {
            Afile8 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile8.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }else
        if (command === "#save file9") {
            Afile9 = history.filter(entry => !isNaN(parseInt(entry.text.split(' ')[0])));
            Afile9.sort((a, b) => parseInt(a.text.split(' ')[0]) - parseInt(b.text.split(' ')[0]));
        }
        
        //load
        //let lines equal the file enetered
        if (command === "#load file1") {
            lines = Afile1;
        }else
        if (command === "#load file2") {
            lines = Afile2;
        }else
        if (command === "#load file3") {
            lines = Afile3;
        }else
        if (command === "#load file4") {
            lines = Afile4;
        }else
        if (command === "#load file5") {
            lines = Afile5;
        }else
        if (command === "#load file6") {
            lines = Afile6;
        }else
        if (command === "#load file7") {
            lines = Afile7;
        }else
        if (command === "#load file8") {
            lines = Afile8;
        }else
        if (command === "#load file9") {
            lines = Afile9;
        }
    }
    
    
}


//func for the basic code to safely handle strings vs nts useing the js eval
function safeEval(expr, variables) {
    return eval(expr.replace(/\b[A-Z]\w*\b/g, v => {
        const val = variables[v];
        return typeof val === "string" ? `"${val}"` : val ?? 0;
    }));
}

//compile func for basic
//the sorting was a mix of what i knwo how to do and stack overflow
//i found sommethinf slightly like what i need  and then just modified and tested  until i go twhere it needed  to be

// the acual compiling i did
// the basic is amixture of  ti basic and applesolf basic becuase ti basic is ment for the os and applesolf basic is just very well documented

function BASICsort () {
    let numericLines = [];
    for (let entry of history) {
        if (entry.user && !isNaN(parseInt(entry.text[0]))) {
            numericLines.push(entry.text);
        }
    }

    numericLines.sort((a, b) => {
        return parseInt(a.split(' ')[0]) - parseInt(b.split(' ')[0]);
    });

    lines.push({ text: '** LIST ** \n', user: false });
    for (let line of numericLines) {
        lines.push({ text: line, user: false });
        
    }lines.push({text:"~ ~ ~ ~ ~ ~ ~ ~ ~ ~\n", user: false});
};

function compileBASIC(tempLines) {
    const userLines = tempLines.filter(lines => lines.user);
    const variables = {};
    const output = [];
    const lineMap = {};

    userLines.forEach((lineObj, index) => {
        const match = lineObj.text.match(/^(\d+)\s+/);
        if (match) {
            const lineNum = parseInt(match[1]);
            lineMap[lineNum] = index;
        }
    });

    let pc = 0;

    while (pc < userLines.length) {
        const { text } = userLines[pc];
        const trimmed = text.trim();
        const match = trimmed.match(/^(\d+)\s+(.*)$/);
        if (!match) {
            pc++;
            continue;
        }  

        const command = match[2];

        if (command.startsWith("LET ")) {
            const [, varName, expr] = command.match(/^LET\s+([A-Z]\w*)\s*=\s*(.+)$/i) || [];
            if (varName && expr) {
                try {
                    variables[varName] = safeEval(expr, variables);
                } catch {
                    output.push(`Error evaluating LET: ${text}`);
                }
            }
        } else if (command.startsWith("PRINT ")) {
            const expr = command.slice(6);
            try {
                const result = safeEval(expr, variables);
                output.push(result);
            } catch {
                output.push(`Error evaluating PRINT: ${text}`);
            }
        } else if (command.startsWith("GOTO ")) {
            const dest = parseInt(command.slice(5).trim());
            if (dest in lineMap) {
                pc = lineMap[dest];
                continue;
            } else {
                output.push(`Error: line ${dest} not found`);
            }
        } else if (command.startsWith("IF ")) {
            const ifMatch = command.match(/^IF\s+(.+?)\s+THEN\s+GOTO\s+(\d+)$/i);
            if (ifMatch) {
                const [, condition, dest] = ifMatch;
                try {
                    const condResult = safeEval(condition, variables);
                    if (condResult) {
                        if (parseInt(dest) in lineMap) {
                            pc = lineMap[parseInt(dest)];
                            continue;
                        } else {
                            output.push(`Error: line ${dest} not found`);
                        }
                    }
                } catch {
                    output.push(`Error evaluating IF: ${text}`);
                }
            }
        }
        pc++;
    }
    console.log(output);
    return output;
}


//asm regisotrs 

//base adress acc
let aBAAx001; //used for strs and int
let aBAAx002; //used for length and reserved space
let aOTx000; //usedd for output type 1 is str and 0 is int

//registors for asmbally that are specifoed for length varibles and there are10 of then 
//a0x - a asm registor
//L - ment for saving lengths 
//000 - num of registor there are  10 total staring at 001
let a0xL001;
let a0xL002;
let a0xL003;
let a0xL004;
let a0xL005;
let a0xL006;
let a0xL007;
let a0xL008;
let a0xL009;
let a0xL010;

//varible registors
//strings 
//there are 30 str registors
let a0xS001;
let a0xS002;
let a0xS003;
let a0xS004;
let a0xS005;
let a0xS006;
let a0xS007;
let a0xS008;
let a0xS009;
let a0xS010;
let a0xS011;
let a0xS012;
let a0xS013;
let a0xS014;
let a0xS015;
let a0xS016;
let a0xS017;
let a0xS018;
let a0xS019;
let a0xS020;
let a0xS021;
let a0xS022;
let a0xS023;
let a0xS024;
let a0xS025;
let a0xS026;
let a0xS027;
let a0xS028;
let a0xS029;
let a0cS030;
//int resitors ther are 100 if you run out of length resigtors just use these
let a0xN001;
let a0xN002;
let a0xN003;
let a0xN004;
let a0xN005;
let a0xN006;
let a0xN007;
let a0xN008;
let a0xN009;
let a0xN010;
let a0xN011;
let a0xN012;
let a0xN013;
let a0xN014;
let a0xN015;
let a0xN016;
let a0xN017;
let a0xN018;
let a0xN019;
let a0xN020;
let a0xN021;
let a0xN022;
let a0xN023;
let a0xN024;
let a0xN025;
let a0xN026;
let a0xN027;
let a0xN028;
let a0xN029;
let a0cN030;
let a0xN031;
let a0xN032;
let a0xN033;
let a0xN034;
let a0xN035;
let a0xN036;
let a0xN037;
let a0xN038;
let a0xN039;
let a0xN040;
let a0xN041;
let a0xN042;
let a0xN043;
let a0xN044;
let a0xN045;
let a0xN046;
let a0xN047;
let a0xN048;
let a0xN049;
let a0xN050;
let a0xN051;
let a0xN052;
let a0xN053;
let a0xN054;
let a0xN055;
let a0xN056;
let a0xN057;
let a0xN058;
let a0xN059;
let a0xN060;
let a0xN061;
let a0xN062;
let a0xN063;
let a0xN064;
let a0xN065;
let a0xN066;
let a0xN067;
let a0xN068;
let a0xN069;
let a0xN070;
let a0xN071;
let a0xN072;
let a0xN073;
let a0xN074;
let a0xN075;
let a0xN076;
let a0xN077;
let a0xN078;
let a0xN079;
let a0xN080;
let a0xN081;
let a0xN082;
let a0xN083;
let a0xN084;
let a0xN085;
let a0xN086;
let a0xN087;
let a0xN088;
let a0xN089;
let a0cN090;
let a0xN091;
let a0xN092;
let a0xN093;
let a0xN094;
let a0xN095;
let a0xN096;
let a0xN097;
let a0xN098;
let a0xN099;
let a0xN100;



//compile func for ASM
function compileASM(code) {
    
};

//grpahing function
function graphBASIC () {
    let file = whatFileToGraph;
    let code;
    
    switch (file) {
        case "1":
            code = Bfile1;
            break;
        case "2":
            code = Bfile2;
            break;
        case "3":
            code = Bfile3;
            break;
        case "4":
            code = Bfile4;
            break;
        case "5":
            code = Bfile5;
            break;
        case "6":
            code = Bfile6;
            break;
        case "7":
            code = Bfile7;
            break;
        case "8":
            code = Bfile8;
            break;
        case "9":
            code = Bfile9;
            break;
    }
    //change the memory adress
    //format
    //# poke (addr), <"content">
    for (let i = code.length; i >= 0; i--) {
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m001)") m001 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m002)") m002 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m003)") m003 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m004)") m004 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m005)") m005 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m006)") m006 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m007)") m007 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m008)") m008 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m009)") m009 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m010)") m010 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m011)") m011 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m012)") m012 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m013)") m013 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m014)") m014 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m015)") m015 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m016)") m016 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m017)") m017 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();    
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m018)") m018 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m019)") m019 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();    
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m020)") m020 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m021)") m021 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m022)") m022 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m023)") m023 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m024)") m024 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m025)") m025 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m026)") m026 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m027)") m027 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m028)") m028 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m029)") m029 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m030)") m030 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m031)") m031 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m032)") m032 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m033)") m033 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m034)") m034 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m035)") m035 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m036)") m036 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m037)") m037 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m038)") m038 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m039)") m039 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m040)") m040 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m041)") m041 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();    
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m042)") m042 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m043)") m043 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m044)") m044 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m045)") m045 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m046)") m046 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m047)") m047 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m048)") m048 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m049)") m049 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m050)") m050 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m051)") m051= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m052)") m052= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m053)") m053= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m054)") m054= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m055)") m055= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m056)") m056= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m057)") m057= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m058)") m058= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m059)") m059= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m060)") m060= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m061)") m061= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m062)") m062= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m063)") m063= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m064)") m064= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m065)") m065= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m066)") m066= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m067)") m067= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m068)") m068= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m069)") m069= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m070)") m070= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m071)") m071= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m072)") m072= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m073)") m073= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m074)") m074= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m075)") m075= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m076)") m076= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m077)") m077= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m078)") m078= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m079)") m079= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m080)") m080= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m081)") m081= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m082)") m082= (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m083)") m083 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m084)") m084 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m085)") m085 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m086)") m086 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m087)") m087 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m088)") m088 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m089)") m089 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();    
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m090)") m090 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m091)") m091 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m092)") m092 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m093)") m093 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m094)") m094 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m095)") m095 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();      
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m096)") m096 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m097)") m097 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m098)") m098 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m099)") m099 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m100)") m100 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();    
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m101)") m101 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();    
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m102)") m102 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m103)") m103 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(",")-1)) == "poke (m104)") m104 = (code[i]).substring(code[i].indexOf("<")+1, code[i].indexOf(">")).toString();
        
        //print 
        //# print <varible | "string">
        if (code[i].substring((code[i]).indexOf(" "), ((code[i]).indexOf(" <")-1)) == 'print') {
            if (code[i].indexOf("\"") != -1 || code[i].indexOf("\'") != -1) {
                lines.push(code[i].substring(code[i].indexOf("<"), code[i].indexOf(">") ));
            } // else 
            // if (code[i].indexOf("1") != -1 || code[i].indexOf("2") != -1 || code[i].indexOf("3") != -1 || code[i].indexOf("4") != -1 || code[i].indexOf("5") != -1 || code[i].indexOf("6") != -1 || code[i].indexOf("7") != -1 || code[i].indexOf("8") != -1 || code[i].indexOf("9") != -1 || code[i].indexOf("0") != -1 || ) {
                
            //     lines.push(parseInt(code[i].substring(code[i].indexOf("<"), code[i].indexOf(">"))));
            // }
        }
    }
}
