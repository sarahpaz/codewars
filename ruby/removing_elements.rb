# Removing Elements
# https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
def remove_every_other(arr)
  arr.each_slice(2).map(&:first)
end