n=int(input())
s="    <ul>\n"
ss=""
for i in range(n):
	ss+="    <li>"+str(i+1)+"</li>\n"
sss="    </ul>"
print(s+ss+sss)
