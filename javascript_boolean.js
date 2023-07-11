//Question 1: Write a condition that checks whether a variable isRaining is true and
a variable isSunny is false. Store the result in a variable called shouldStayInside.
a= isSunny ;
b= isRaining ;
boolean shouldStayInside ;
shouldStayInside = (!a&&b);

//Question 2: Write a JavaScript function called hasPermission that takes two
boolean parameters, isUserLoggedIn and isAdmin, and returns true if the user has
permission and false otherwise.

//Question 3: Write a JavaScript function called hasUniqueCharacters that takes a
string as an argument and returns true if all characters in the string are unique and
false otherwise.
boolean hasUniqueCharacters(String str)
    {
        // If at any time we encounter 2 same characters, return false
        for (int i = 0; i < str.length(); i++)
            for (int j = i + 1; j < str.length(); j++)
                if (str.charAt(i) == str.charAt(j))
                    return false;
        // If no duplicate characters encountered,  return true
        return true;
    }
