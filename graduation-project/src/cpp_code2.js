let myarr2=[
{
    code:`//transmitter code 
    //all the best
    #include<SoftwareSerial.h>
    SoftwareSerial mybt(12,13); // bluetooth
    int m=0, n=0;`,
    code_text:`All are specified here  pins  Which will work outside, which will work inside , And then I worked the symptoms of the result on Serial.begin.`
},
{
    code:`void loop() {
        m = analogRead(A0);  //X
        n = analogRead(A1);  //Y`,
    code_text:`take reading from A0 --> X, A1 ----> Y`
},
{
    code:`if(n>=375) //back 
    {
    mybt.write("F");
    Serial.println("F");
    
    }`,
    code_text:`n mean Y axis
    when the reading n is greater than or equal to 375 , print (F),`
},
{
    code:`else if(n<=320) //forward
    { 
      mybt.write("B");
      Serial.println("B");
      } `,
    code_text:`n mean Y axis  
    when the reading n is greater than or equal to 320 , print (B),`
},
{
    code:`else if(m>=375) //left
    {
    mybt.write("R");  
    Serial.println("R");
    
    }`,
    code_text:`m mean X axis
    when the reading m is greater than or equal to 375 , print (R),`
},
{
    code:`else if(m<=315) //right
    {
    mybt.write("L");
    Serial.println("L");
    
    }`,
    code_text:`m mean X axis
    when the reading m is greater than or equal to 375 , print (L),`
},

{
    code:`lse
    {
      
    mybt.write("N");   // no thing (Stop)
    Serial.println("N");
    
    }
    }`,
    code_text:`Not all of this print N `
},

]
export default myarr2;