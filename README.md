# Implementation:

### Map -> Select Pin -> Bathroom Information

The feature we implemented is selecting a pin on a map that 
opens up a popup that takes you to the bathroom information pane 
which then shows you bathroom information related to the bathroom. 
We built a backend using python that connects to MongoDB which holds
pin information and bathroom information that the front ends calls to 
retrieve the data. 

### Fit Criteria To Use Based Off The Feature We Have Implemented: 
- 80 percent of users who have never used Linkle shall be able to find a bathroom using a bathroom pin in less than 15 minutes.
- Bathroom data should be accurate, and every bathroom page must contain an image and a correct rating score based off reviews.




# Instructions:  

## You need both NodeJS and Python installed to run this program  


### To run this program:  
open a terminal in the directory  
run `./start.bat`  


### Other things:  
if you'd like to just install the needed packages:  
run `./build.bat`  

if you've already installed the needed packages and just want to run:  
run `./run.bat`  

When closing the program, ensure that you terminate both the frontend and backend via `Ctrl-C` rather than just closing the window.  

If you want to get rid of the python libraries that were installed, run these commands:  
`pip uninstall flask`  
`pip uninstall flask-cors`  
`pip uninstall pymongo`