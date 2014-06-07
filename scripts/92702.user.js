// ==UserScript==
// @name          Google's logo replacer with Kaskus's logo
// @namespace     http://userscripts.org/scripts/show/92702
// @include       http://google.*/*
// @include       http://*.google.*/*
// @version       1.0
// @description   Replacing Google's logo with Kaskus's logo
// @author        sempaxxx (http://userscripts.org/users/sempaxxx)
// ==/UserScript==

var logoku = document.createElement('img');
logoku.title = 'The Largest';
logoku.setAttribute('border', 0);
logoku.src = 'data:image/gif;base64,R0lGODlh1wBVANUAAGa85fv9%2FYbK6zWm3f7z5veYJtXt%2BPzIjBWY2Kva8QqU1uHy%2BvinRfzVp%2FX6%2Ffq2ZZnS7iui2%2F7s173i9PzctVKz4sLk9X7G6LPe8vvCfej1%2B%2F3jxP%2F58%2FiiOfzQm87p9%2FiwWPq8ckCr3%2FvMkkyw4XDA5%2FyUGFiRlP7ozvmsT%2FicL9vv%2BSCd2Vi240au4F%2B55KHW78jn9v3myY%2FO7O74%2FHbD6P3fvACP4P7w32y%2B5imh4svOvbTW4PeUHQCP1P%2F%2F%2FywAAAAA1wBVAAAG%2F8CfcEgsGo%2FIpHLJbDqf0Kh0Sq1ar9isdsvter%2FgsHhMLpvP6LR6zW673%2FC4fE6v2%2B%2F4vH7P7%2Fv%2FgIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnn0TABWjpKMXBkg0JRGsra6sAzUaRRgvpbekAgtKDhYCLy4DESwsCMbHxywRAy0CEw4%2FMhkP1NXUBwRIBBkM3d7f3tbVBzhMFCHi1R4cHBQHDyDdHSr09fYdDCAhDRJcMD4AAwr0gQCDkRURBioUGIHGkBILIyKIgQQGi4gYFUa40MNEj48gQapAYYRAh5AoU6pUsSFJgBAqQzI4GbMmyhQNshhQkBHggP8ARFZc7DkQgpAERAe6MLLARdKnJ2z26MCBCAEGUrP2SJHEg9avWR9UtXLh6YchFhIGVMC2rVsEAZcGUPsUoMEhGoYqVGCMmDJWfhHwHHjjhAmPMSkMsUHzY4HHkCOrkNrPSACsYB0XoNcBn7fO8wqoZFCZSo6AFyaoXk0i4AQhGAYD1LWgtu3aGgAEFPEDQ0AWGFYLX30aYASgQl4IZJEjgQUDC2jQcEA9gHXqDmgs%2BAAjB90bOzaIHw%2FzowchKESDzECgvfv3Dw6MH%2F8AZEsjHGgWsDFfPOatI1CAAg4EsMOOddYZyAEOMjQQwmQgcVUFRHYZUZwPr00gmw8XKHH%2FIYc%2FDBDQDEusIBsMQsQgUAkOURGAAAFRVMQIIJ0nA4QfHaAETDYYkYF9R%2BT3kQrIEQHCRyNYQUB5H5UmBYU%2BJGCEbgDFMAFcACkgQBIaOPUbDf8AhMAsS9Tw5Q%2FKAURCFjMA9FoRB4DUAAXqfZSTNuUpVsSPH91XhJA9qDCWkT3ceQWTGUwYkJRFUOlDa2u9eYQBdPkwQHRY%2BrAlEw7oJUAAmaKShYiSDhHnRymEVIChRqDQmJ5E8NmDn0QAKqgRKTCghQQgMVBkFFAySoSjA6GIxJUCkeCQmQCx0CITEAQ0wAfSbgFRqUKcilIBsBohAY49dCuErLQOYeugQzCQ%2F2QWHEBYQDZTBDulQggYe0RsyULTaUBGGfEBmUQ4QFcFAbVghAMJCFBDDgC84LDDOdSQADRFtIntD9qCtF8SNoAbro9A4kfTrUWkIO4PBLiTQQYhtOxyBvL9KkSqH5UT76LzLrdCEmUJRKIQMALEmxFI%2FWREmAPVQHRS%2FRLxz8UZB0oSErKGdDK5QY6MrhAglPvDkVl5DXYBTkLBbJQ5iynjEWniLIQGmd5FxFwACTsEDZmidnRSFcTg999lQR1SB2UTETVIV4f8p9ZGdI2rVhmgIPnkNPdQOBK31eao3UKUwJcCEZx1RAAfKmDvD2ezQLHTAUWw%2BhBtDtRhEUKxVf%2BXQBePsFkBDNiMH5NT%2FZd4n1kPufXXXjfQwWOZoeT7Em7ZHqMRNGhg%2FetEfCCitKKmKBvnP%2BQl0OlCBLB9QAAc4cACKxjwwQd%2BW6AaBglAIEAOIuiFIX7uHS%2FEVYPDgayGN6viBep4KegRfnCAAwlIYHIyEI8NGtCAA6zsghc8jxMwQgKZNSEGeRvAs4QAKR8MrQhB280RJjCQE1YBTEO5GBMk0JitZINJBPTaD86FKw2yYTBAVMALRugEZAVEWUXQgGwscITzueYIIhCIAnaBBQ2QKgp0CkkIkINDkBFPZI45Xj7cYIAymtEAAIsCDPJWge4J4UIGW5pCROBBpAj%2FJI5Y%2BIACZKgED4ArBDbr4p4UVyvGFeFIJ7tCgyjoAUayCgwf0N9EhqCigLhRCDTQn0CaNgTzDSQHVLzCAOT2BAlULlA9EmSsQCKDIEGIKo%2FrwQj8N4WqqaoMC4jiWozlJRMeAQLRc4vrjOCbgSiABBeAQAKCE4MPrCA61GFCBUj5BA6cclYD9GIPHtBICniTAg3Q3Ud0FcuphGAEc7KBDFAgAQKxowkUqIkKmjCDAdjzYjMQgT4BEMoiBIBYmiomQJhoBA1k7jYr8OAPetkTtiCAGPYcgAsEgD00ga8BIMhoCOD1O1W9ygiHqwkIjvCfmjxGBZ5JQQpAkEiwqaQA%2F024EPjaRhA%2B%2FgCYEcnBFnbigxrQLwFAxQBDM0JNi4J0cK1Egg3qFJJH%2FmADYPGhuRjggW96swEeiwnJiFC5BvQnqUuQV6MGggCbWkCTBOknFnRT1J4RpagvAF%2FUuMWxrK5rbhlgakwYcLz8cHQINaxJBzyImXfdrG5pWwsni2AATc5uC9QCXwxYED0fBFMERPxBC%2BSaEroiQQIl7UGijiABCnjAgixrGcw8sAH%2F4UAFzxPCCFQQGdHUVgWjnZt%2B%2FvoEsQ4rIgBQaPgupIA0amGiR9DOCpbbPgMwdwXGHYIIihrSHoSAlhwAnoS2YAPLBYkADGRgO8PbniPgQD2DPf8s2sYKkBKwMbOwA4hOiRbR%2Bto3oi3wYAzmmwUHFOSoH3kAuEBAyx%2FQyDGxPVQPwIqFeAaYCr4dgqM%2B0FiBDGBnSJgBC9T6A4HdDnw%2FuACHqfA0ABcKBQPmLRGy2AOpXkECosktFlx6V2C57bdu%2BsEKdNksm0b3Byl8iguHsAIAwDcKGICL4MzzAxzUByQdSKQQZJAqFbiYCq5yTI2rcOAeFCDBToBSUS%2F0pn8WBQp6CWZln2gEAUQAAgmdwgrOJjoidNmHT5bTjlBFARU7QQIH0GsC%2FdwEGeRZtFW4UAT0yej8sVkIZ%2FOJCxpN6UafjwXQOahtUldpEWwPdCJ4QQn%2FLnCBGZj61KcmdQkqMIANgWClGc1oY1gVtVjb2tZ1KkAKQnAADzSSgla1ajhDcE2UqIABDwgBzEbg62Y3ewQHsOADQrtVKUSLKFMswgU2dDuALNYIBui2uANSGMTEhME%2FaEDz1m3SwLLb2FJ2QgCGuhD%2BZg%2BtT2kIE2I37tsZxtwpkfEQNuDud4MFBCjIrl4NvlEs0IAE3A4IAnJQUSEYQAQRz8gxMbxvfGdpAJQdNwIqwIMHLHxIOkKCk0%2BOEgZkAARZ%2FYoKHtAtCYwgBbRddwE6EAIdVmEFfwt6DH5MO6EbXegcdwINju63nQVgBRbAAAxSTWpSo3oGEMDAB56F%2F4PJeR0FhCbCA7%2F%2BdQmMhQMoMC20MZjal2UAnQlPwoI2AE5fQzva0XZ2I20gAeF%2B4u%2BPcIAHraMEGvi9CRUPwJGXsHgoZCdgjR%2BDzA6vhBfUt28VoJjCflBPezZNAJsi8gAI2iV7DvEonh5ACW4a0Rf8wALCEIEBghHR9P2ABiJo3%2BhT1CEI1D6UF4g9Khzggrt8oAKsN%2F3rhTEADawgv0KAQfOjf6mjcJIGAGCFC6AR%2FAi4AMO2ED0T60mmAIiARDUIfQsmQINRwsZgAoBA5%2B0pgglkXggAeGwUPmD%2FAUzASghAMQCwJqKmGqHUArYHOyMnBCZiAce3evUEA%2FDzGv8A4H8T8AHmAwELEANLNwER8AIX%2BDYK8AEWYClAgQHI9wIXAHQ1wAIUQQIu4ExutgCdggC7MAEs8AMlMHoXuAAIoIEW4AAfMEzmgwCMAiMuABQz8FgLEAEl8AEbGAAvIAJQeAEIgAoJQVBtgiLKsSkl6Hok4HpCwAIJoAGW4hAWoVklsAITUAMIYAFB2AKrZwBXaAU1gHyvl4Odg3wAAFcJ%2BAPzlgBjomPO0hvKMoJFkAN4JDBrIwTIhRcIwH8DQAIkggEGAwD2UgEkoCHPIgI1EAAV4AJrkhaog0fhVmdDCBRpAQN4KAAkEAEGMQOhV4FEoCIcFwHpMwAioFMOQAL%2FA0AiFaBPbyQCyFcBYvgDEVCGy5A%2BMBABaLJ6P5AAzigEeqQBOfBtwIKHMSBEL5B9BpMDLlACJdA93ViLAxAiJOKDGIAB03Ul0EAD0BEALSiOUlIDCiAL0hV64ROJEzAA20gDE3CJ9tKMJeBC4OgAbeQDzeSMF8AC9PhP9wgNqfgDOaBTETALFwCCziiLQ8ACPyMEMzCNQhB8NPBmS8GOLaA05ydCJXkBvGGMQ5CMGgCLPvABGOCMohZ9IqlZk1ZxULBq3lMDpMYMFIlMpzAE5TgEOcACMCCMK4AAwHAcgggU9meDDUlqd5EArCYqIqCPcMN%2FzkgCFTABroeJQ0CQ%2Fy5UAtu3FDNAAqR4lReQlb7YPsfRKZj4gyGGfANwATDwWCzASW5GBMG3ACygASKwAC0wAyWQPhFgAc3Bijf5AxWQgDLJAvI4AM34jDpJBAugKVgAlHn4EHw4U%2FzVKS9QAyWgOj7oENO1AAqAYXizACWAR0RQkULQlUTwlR54eyOXPmZ5m32oAKvjAhcwb9AgAi3AGzVAm0OgegjxAx%2BAADVQA8EAZMinR4k5BCSwJkPAQgAzADnQWCFWgQ5whz%2BAafZXf2eFJngEHHkxC7rIGzn5A5lJBCxgU0%2BQA9xpAQGIfwQIAQiClC9AeIIoXRgAN7twATrVAi6wC0okmx2EIP9kUgGbIgL6p0RgeRQ%2B4HovgCIOsG0GEAAsMKC9YYMOIALQ4BvOWAIRGgDrA4gRIADPOQO2twI%2BsACuOJI%2B8JElaCyCFwFxhBRsmIO%2BYTAuCSrQBToBwJ8BkACvGY3F5YOzoEfn%2BALzVZ%2FlAxxYIAC2FwMDQDEXkD4u2QIUOgTBR6YKyl9L2H6zEAPI14vM4IsaEJJkyk8VQKYu0CLZeTcRYAAxsBRCUAE65ZIvQAIiICPaY4zJeHsvQDGWx3lAOpmwV6jKMntSKCkuAAMQYHsOMACc1IxhmF%2B5ZIwDICVCFT6weFMVwKYLpTQGIEJSOAAv8GY%2FsAAihH%2FKOTvsODc%2F%2Fgd4vvqrwBqswjqsxFqsxnqsyJqsyrqszNqszvqs0Bqt0jqt1Fqt1nqt2Jqt2rqt3Nqt3vqt4Bqu4jquRBAEADs%3D';

var elmNewContent = document.createElement('a');
elmNewContent.href = 'http://www.kaskus.us/';
elmNewContent.appendChild(logoku);

var elmLogo = document.getElementById('logo');
elmLogo.parentNode.replaceChild(elmNewContent, elmLogo);
