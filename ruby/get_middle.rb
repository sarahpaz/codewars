#* Get the Middle Character
#* https://www.codewars.com/kata/56747fd5cb988479af000028

def get_middle(s)
	num = s.length
	length_of_string = num/2
	num.even? ? ( s[length_of_string-1] + s[length_of_string]) : (s[length_of_string])
end