# Lab 4.2 - Flight Data Recorder ✈ Capturing and Analyzing Code Changes
This lab exercise demonstrates integrating GitHub Copilot into database development and testing by implementing audit logging, query optimization, and data integrity checks. Participants will explore how AI-powered assistance enhances flight data tracking, debugging workflows, and maintaining historical records in an aviation-themed database.

## Prerequisites
- The prerequisites steps must be completed, see [Labs Prerequisites](../Lab%201.1%20-%20Pre-Flight%20Checklist/README.md)

## Estimated time to complete

- 20 min, times may vary with optional labs.

## Objectives

- This lab series guides participants through designing, optimizing, and testing an aviation-themed database while leveraging GitHub Copilot for AI-assisted development. By the end of these exercises, participants will have built a fully functional, well-structured aviation database with realistic data, optimized queries, and automated testing.
    - Step 1 - Blueprinting the Aviation Database ✈ Defining the schema and relationships
    - Step 2 - Refining the Flight Plan ✈ Optimizing table structure and improving data relationships
    - Step 3 - Filling the Logbook with Historical Data ✈ Generating realistic Wright Brothers aviation test data
    - Step 4 - Simulating Flight Operations ✈ Creating randomized flight records linked to pilots, planes, and airfields
    - Step 5 - Navigating Flight Details ✈ Developing a stored procedure for retrieving flight information
    - Step 6 - Turbocharging Flight Scheduling ✈ Optimizing query performance with indexing
    - Step 7 - Flight Readiness Check with Automated Testing ✈ Implementing tSQLt to verify database operations

> [!WARNING]  
> This lab is under construction and might present potential risks.
### **Step 1 - Blueprinting the Aviation Database**  
Lay the **foundation** for the Wright Brothers' aviation database by designing **AviationDB.sql**. Define the schema with structured **One-to-Many relationships** between **Pilots, Planes, Flights, and Airfields**, ensuring data integrity and historical accuracy.




### **Step 2 - Refining the Flight Plan**  
Optimize the **database structure** by eliminating **redundant data**, improving **relationships**, and enhancing **date usability**. Adjust tables for **better scalability** while keeping the database **lightweight and efficient**, just like the Wright Flyer.




### **Step 3 - Filling the Logbook with Historical Data**  
Populate the database with **realistic test data** based on the **Wright Brothers' aviation history (1903-1910)**. Generate **INSERT statements** that accurately represent early **flights, pilots, aircraft, and airfields** to create a **rich dataset**.




### **Step 4 - Simulating Flight Operations**  
Generate **realistic flight records** with randomized **departure and arrival times**, linking them to **random pilots, planes, and airfields**. This provides a **diverse and dynamic dataset**, mirroring the unpredictable conditions of early aviation.




### **Step 5 - Navigating Flight Details**  
Develop a **stored procedure, `GetFlightDetails`**, that retrieves **comprehensive flight information**, including the associated **pilot, plane, and airfield**. This ensures smooth **data retrieval**, much like a well-executed flight plan.




### **Step 6 - Turbocharging Flight Scheduling**  
Improve **query performance** by creating a **non-clustered index** on the **DepartureTime** column in the **Flight** table. This ensures that **flight schedules** are quickly accessible, reducing delays in data retrieval—just like optimizing takeoff efficiency.




### **Step 7 - Flight Readiness Check with Automated Testing**  
Implement **tSQLt unit testing** in `TestFlightInsert.sql` to **validate flight record operations**. This ensures the database **accurately processes flight data**, just as pre-flight checks ensure a **safe takeoff**.



### Congratulations you've made it to the end! &#9992; &#9992; &#9992;

#### And with that, you've now concluded this module. We hope you enjoyed it! &#x1F60A;
