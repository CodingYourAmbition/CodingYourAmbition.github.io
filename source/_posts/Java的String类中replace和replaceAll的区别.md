---
title: Java的String类中replace和replaceAll的区别
date: 2024-04-18 19:25:23
tags:
  - String
categories:
  - Java
---
In java.lang.String, the replace method either takes a pair of char's or a pair of CharSequence's (which String is implementing, so it'll happily take a pair of String's). The replace method will replace all occurrences of a char or CharSequence.
On the other hand, the first String arguments of replaceFirst and replaceAll are regular expressions (regex).
Using the wrong function can lead to subtle bugs.

Relevant sections from java.lang.String:

String replace(char oldChar, char newChar)
Returns a new string resulting from replacing all occurrences of oldChar in this string with newChar.

String replace(CharSequence target, CharSequence replacement)
Replaces each substring of this string that matches the literal target sequence with the specified literal replacement sequence.

String replaceAll(String regex, String replacement)
Replaces each substring of this string that matches the given regular expression with the given replacement.

String replaceFirst(String regex, String replacement)
Replaces the first substring of this string that matches the given regular expression with the given replacement.

[from](https://stackoverflow.com/questions/10827872/difference-between-string-replace-and-replaceall "来自")
