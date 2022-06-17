let myarr=[
  
{code:`#include<SoftwareSerial.h>
SoftwareSerial mybt(12,13); 
char m=0,n=0;

`,code_text:"frist Configure bluetooth to take (RX = pin 13)(TX = pin 12)"
},
{code:`#include<NewPing.h>
#define TRIG A2  
#define ECHO A3  
#define MAX_DISTANCE 100  
NewPing sonar(TRIG, ECHO, MAX_DISTANCE);     
`,code_text:`Configure it ultrasonic sensor to take both (TRIG = pin A2 ),(ECHO = pin A3),
And the distance that he can read is determined by (#define MAX_DISTANCE 100 ),
And to download the library of the sensor and read it through it (NewPing sonar(TRIG, ECHO, MAX_DISTANCE)  )`
}

,
{code:`
int enA = 9;
int enB = 10; 
int lm1=2; 
int lm2=3; 
int rm1=6;  
int rm2=5;
`,code_text:`Here the motors are connected to the( L298N Motor Driver ) Responsible for converting digital signals into analog signals so that the motors can be moved steadily
This is done by connecting each of the (lm1=pin 2 ,lm2 =pin 3,rm1=pin 6, rm2=pin 5 )
(ENA = pin 9 , ENB = pin 10)  Responsible for controlling the speed of the motors on the right and left.`
}

,
{code:`
int sl=7;    //sensor 1 input (left)
int sr=8;    //sensor 2 input (right)
int SlV=0;
int SrV=0;
int led=A0;
`,code_text:`initialization IR sensor Handle the existing situation, is initialized by 
first sensor (sl = pin 7)
second  sensor (sl = pin 8)`
}

,
{code:`void setup()
  {
  Serial.begin (9600);
   pinMode(lm1,OUTPUT);
   pinMode(lm2,OUTPUT);
   pinMode(rm1,OUTPUT);
   pinMode(rm2,OUTPUT);
   pinMode(led,OUTPUT);
   pinMode(sl,INPUT);
   pinMode(sr,INPUT);
   pinMode(enA, OUTPUT);    //ُENA
   pinMode(enB, OUTPUT);   //ENB
   Serial.begin(9600);
   mybt.begin(9600);
  }`,code_text:"All are specified here  pins  Which will work outside, which will work inside , And then I worked the symptoms of the result on Serial.begin."
}

,
{code:`
void loop()
{
  delay(70);
int distance = sonar.ping_cm();
Serial.println(distance);
 

`,code_text:"Here is the reading from ultrasonic sensor"
}
,
{code:`
/Function  if THe sensor read 0
if (distance == 0) {
  Serial.println("the distance is 30");
  distance = 30;
}
`,code_text:`The sensor can take wrong readings, we must solve them in order for the sensor to continue working, and here we solve it by any reading with a zero, making it 30
`
}
,
{code:`//Function  if THe sensor read <=15
if(distance <=15) {
  Serial.println("stop");
//  Right();
//   analogWrite(enA, 100);
//  analogWrite(enB, 130);
  digitalWrite(lm1,LOW);  
  digitalWrite(lm2,HIGH);
  digitalWrite(rm1,LOW);
  digitalWrite(rm2,LOW);
  analogWrite(enA, 100);
  analogWrite(enB, 130);
//  sTOP();
  delay(350);
} `,code_text:`Here, when the sensor reads the distance that it can read at a distance less than or equal to 15 cm, the condition must be the condition.
`
}
,
{
  code:`SlV=digitalRead(sl); // read sensor IR Left
  SrV=digitalRead(sr); // read sensor IR Right
  if(SrV==LOW && SlV== LOW)                // When both are Low, he walks on me by controlling gestures
  {
  analogWrite(enA, 130); //ENA pin
  analogWrite(enB, 130); //ENB pin
  if(mybt.available()>0) 
  {
  m= mybt.read(); //bluetooth read 
  Serial.println(m);
  if(m=='F') // back
  {
  digitalWrite(lm1, HIGH);
  digitalWrite(lm2, LOW);
  digitalWrite(rm1, LOW);
  digitalWrite(rm2, HIGH);
  }
  else if(m=='B') //forward
  {
  digitalWrite(lm1, LOW);
  digitalWrite(lm2, HIGH);
  digitalWrite(rm1, HIGH);
  digitalWrite(rm2, LOW);
  }
  else if(m=='R') //left
  {
  digitalWrite(lm1, LOW);
  digitalWrite(lm2, HIGH);
  digitalWrite(rm1, LOW);
  digitalWrite(rm2, HIGH);
  }
  else if(m=='L') //right
  {
  digitalWrite(lm1, HIGH);
  digitalWrite(lm2, LOW);
  digitalWrite(rm1, HIGH);
  digitalWrite(rm2, LOW);
  }
  else if(m=='N') // no thing 
  {
  digitalWrite(lm1, LOW);
  digitalWrite(lm2, LOW);
  digitalWrite(rm1, LOW);
  digitalWrite(rm2, LOW);
  }
  else
  {
  digitalWrite(lm1, LOW);
  digitalWrite(lm2, LOW);
  digitalWrite(rm1, LOW);
  digitalWrite(rm2, LOW);
  }
  }   
  }
  else if(SrV==HIGH && SlV== LOW) // Return Left
   {
    Left();
    analogWrite(enA, 130);
    analogWrite(enB, 100);
     }   
     else if(SrV==LOW && SlV== HIGH) //Return Right
   { 
    Right();
    analogWrite(enA, 100);
    analogWrite(enB, 130);
    }
    else if(SrV==HIGH && SlV== HIGH) // Forward
   {
    ForWard();
    analogWrite(enA, 80);
    analogWrite(enB, 80);
     }
  } 
  `,code_text:`first. The reading is taken from the sensitive IR1 & IR2 
  And if the reading SrV==LOW && SlV== LOW  The condition must be implemented, which says that the control of the motors is transferred to the Arabic motors to take the readings sent via Bluetooth and says the following :-
  If the reading is read (B) to forward ,
  If the reading is read (F) to back,
  If the reading is read (L) to Right,
  If the reading is read (R) to Left,
  If the reading is read (N) to Stop.
  if the reading SrV==HIGH && SlV== LOW  go to left,
  f the reading SrV==LOW && SlV== HIGH  go to Right.
  if the reading SrV==HIGH && SlV== HIGH  go to Forward.
  
  `
},
{
  code:`
  // Function Forward
  void ForWard()
   {
    digitalWrite(lm1,LOW);
    digitalWrite(lm2,HIGH);
    digitalWrite(rm1,HIGH);
    digitalWrite(rm2,LOW);
   } 
  `,code_text:'This condition is in order for the motors to be able to move forward.'
}
,
{
  code:`// Function Return Left
  void Left()
  {
   digitalWrite(lm1,LOW);
   digitalWrite(lm2,LOW);
   digitalWrite(rm1,HIGH);
   digitalWrite(rm2,LOW);`,
   code_text: `This condition is in order for the motors to be able to move Left. `
}





,
 {
code:`// Function Return Right
void Right()
{
 digitalWrite(lm1,LOW);
 digitalWrite(lm2,HIGH);
 digitalWrite(rm1,LOW);
 digitalWrite(rm2,LOW);
}  `,code_text: `This condition is in order for the motors to be able to move Right. `





 }




,
 {
   code:`// Function Stop
   void sTOP()
  {
  digitalWrite(lm1,LOW);
  digitalWrite(lm2,LOW);
  digitalWrite(rm1,LOW);
  digitalWrite(rm2,LOW);
  } 
  
  `,code_text:  `This condition is in order for the motors to be able to move Stop.`
 },

]

export default myarr

;
