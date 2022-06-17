const products = [
    {
      '_id': '1',
      'name': 'Arduino UNO and Cable',
      'image': '/images/61NbRWVI2ML._SX522_.jpg',
      'description':
        `Arduino Uno is a microcontroller board based on the ATmega328P (datasheet). It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a 16 MHz ceramic resonator (CSTCE16M0V53-R0), a USB connection, a power jack, an ICSP header and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable or power it with a AC-to-DC adapter or battery to get started.. You can tinker with your Uno without worrying too much about doing something wrong, worst case scenario you can replace the chip for a few dollars and start over again.

        "Uno" means one in Italian and was chosen to mark the release of Arduino Software (IDE) 1.0. The Uno board and version 1.0 of Arduino Software (IDE) were the reference versions of Arduino, now evolved to newer releases. The Uno board is the first in a series of USB Arduino boards, and the reference model for the Arduino platform; for an extensive list of current, past or outdated boards see the Arduino index of boards.`,
      'brand': 'Apple',
      'feature': ["It is opensource both in term of hardware and software","It can perform serial communication with the computer using USB.","It only needs 5V to power up","It can work with Digital and Analog signals, sensors and Actuators.","The recommended input voltage is 7-12V while the operating voltage is 5V for most of the Arduino boards."],
    },
    {
      '_id': '2',
      'name': 'BO motor & Wheel',
      'image': '/images/61gFhq3ZUwL._SL1460_.jpg',
      'description':
        'Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
      'feature':[]
    },
    {
      '_id': '3',
      'name': 'L298N Motor Module',
      'image': '/images/l298n-2.jpg',
      'description':
        'This L298N Motor Driver Module is a high power motor driver module for driving DC and Stepper Motors. This module consists of an L298 motor driver IC and a 78M05 5V regulator. L298N Module can control up to 4 DC motors, or 2 DC motors with directional and speed control.',
      'feature':["Maximum supply voltage 46V","Maximum output DC current 4A","Low saturation voltage","Over-temperature protection","Logical “0” Input Voltage up to 1.5 V"]
    },
    {
      '_id': '4',
      'name': 'Bluetooth HC-05',
      'image': '/images/51YV3TljnYL.jpg',
      'description':
        `Bluetooth is a technology for wireless communication. It is designed to replace cable connections.It uses serial communication to communicate with devices. It communicates with microcontroller using serial port (USART). Usually, it connects small devices like mobile phones, PDAs and TVs using a short-range wireless connection to exchange documents. It uses the 2.45GHz frequency band. The connection can be point-to-point or multi-point where the maximum range is 10 meters. The transfer rate of the data is 1Mbps.

        HC-05 Bluetooth module provides switching mode between master and slave mode which means it able to use neither receiving nor transmitting data.
        
        Comparing it to the HC-06 module, which can only be set as a Slave, the HC-05 can be set as Master as well which enables making a communication between two separate Arduino Boards.`,
      'feature':["HC05 follows the “Bluetooth V2.0+EDR” protocol (EDR stands for Enhanced Data Rate).","Its operating frequency is 2.4 GHz ISM Band","HC05 uses CSR Bluecore 04-External single-chip Bluetooth system with CMOS technology.","This module follows the IEEE (Institute of Electrical and Electronics Engineers) 802.15.1 standard protocol.","Dimensions of HC-05 are 12.7mmx27mm.","Its operating voltage is 5V."]
    },
    {
      '_id': '5',
      'name': 'Jumper Wire',
      'image': '/images/41YsxApKy-L.jpg',
      'description':
        'Jumper wires are simply wires that have connector pins at each end, allowing them to be used to connect two points to each other without soldering. Jumper wires are typically used with breadboards and other prototyping tools in order to make it easy to change a circuit as needed. Fairly simple. In fact, it doesn’t get much more basic than jumper wires.',
      'feature':[]
    },
    {
      '_id': '6',
      'name': 'Breadboard',
      'image': '/images/41gAb9zFX9L.jpg',
      'description':
        'Many electronics projects use something called a breadboard. What is a breadboard, and how do you use it? This tutorial video will give you a basic introduction to breadboards and explain how to use them in beginner electronics projects; you can also read more details and see more examples in the text sections.',
      'feature':[]
    },
    {
      '_id': '7',
      'name': 'Accelerometer',
      'image': '/images/610jRypwnyL._SL1100_.jpg',
      'description':
        `An accelerometer is a device that measures the vibration, or acceleration of motion of a structure. The force caused by vibration or a change in motion (acceleration) causes the mass to "squeeze" the piezoelectric material which produces an electrical charge that is proportional to the force exerted upon it. Since the charge is proportional to the force, and the mass is a constant, then the charge is also proportional to the acceleration. These sensors are used in a variety of ways from space stations to handheld devices, and there's a good chance you already own a device with an accelerometer in it. For example, almost all smartphones today house an accelerometer. They help the phone know whether it undergoes acceleration in any direction, and it’s the reason why your phone’s display switches on when you flip it. In an industry setting, accelerometers help engineers understand a machine\'s stability and enable them to monitor for any unwanted forces/vibrations.`,
      'feature':["It is used to detect earthquakes due to the presence of a motion sensor.","It is present on the laptop, which protects the hard drives from damage.","It is used to create custom projects.","It can determine the movements (uphill, etc.) of the object."]
    },
    {
      '_id': '8',
      'name': 'hc-sr04',
      'image': '/images/hc-sr04-800x609.jpg',
      'description':
        `Ultrasonic Sensor HC-SR04 is a sensor that can measure distance. It emits an ultrasound at 40 000 Hz (40kHz) which travels through the air and if there is an object or obstacle on its path It will bounce back to the module. Considering the travel time and the speed of the sound you can calculate the distance.

        The configuration pin of HC-SR04 is VCC (1), TRIG (2), ECHO (3), and GND (4). The supply voltage of VCC is +5V and you can attach TRIG and ECHO pin to any Digital I/O in your Arduino Board.`,
      'feature':["Power Supply :+5V DC.","Quiescent Current : <2mA.","Working Current: 15mA.","Ranging Distance : 2cm – 400 cm/1″ – 13ft.","Resolution : 0.3 cm.","Measuring Angle: 30 degree.","Trigger Input Pulse width: 10uS TTL pulse."]
    },
    {
      '_id': '9',
      'name': 'ir sensor',
      'image': '/images/SKU072960-1.jpg',
      'description':
        'The IR sensor or infrared sensor is one kind of electronic component, used to detect specific characteristics in its surroundings through emitting or detecting IR radiation. These sensors can also be used to detect or measure the heat of a target and its motion. In many electronic devices, the IR sensor circuit is a very essential module. This kind of sensor is similar to human’s visionary senses to detect obstacles.',
      'feature':["5VDC Operating voltage","I/O pins are 5V and 3.3V compliant","Range: Up to 20cm","Adjustable Sensing range","Built-in Ambient Light Sensor","20mA supply current"],
    },
    {
      '_id': '10',
      'name': '12 Volt Battery',
      'image': '/images/71bHIIPweHL._SX522_.jpg',
      'description':
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      'feature':[]
    },
    {
      '_id': '11',
      'name': 'MAX30100',
      'image': '/images/MAX30100.webp',
      'description':
        'MAX30100 is a multipurpose sensor used for multiple applications. It is a heart rate monitoring sensor along with a pulse oximeter. The sensor comprises two Light Emitting Diodes, a photodetector, and a series of low noise signal processing devices to detect heart rate and to perform pulse oximetry.',
      'feature':["Operating Voltage - 1.8V to 3.3V","Input Current - 20mA","Integrated Ambient Light Cancellation","High Sample Rate Capability","Fast Data Output Capability"]
    },
    {
      '_id': '12',
      'name': 'LCD',
      'image': '/images/LCD.jpg',
      'description':
        'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
      'feature':[]
    },
  ]
  
  
  export default products
  