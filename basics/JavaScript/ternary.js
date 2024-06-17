let accessLevel;
  //write your code here
    if (jobTitle === "Manager") {
        accessLevel = "Full Access";
    } else if (jobTitle = "Supervisor") {
        if (yearsOfExperience >= 5) {
            accessLevel = "Full Access";
        } else {
            accessLevel = "Partial Access";
        }
    } else if (jobTitle = "Associate") {
        if (yearsOfExperience >= 3) {
            accessLevel = "Partial Access";
        } else {
            accessLevel = "Limited Access";
        }
    } else {
        if (yearsOfExperience >= 2) {
        	accessLevel = "Limited Access";
    	}
        else {
        	accessLevel = "Trainee Access";
        }
    }

  return accessLevel;