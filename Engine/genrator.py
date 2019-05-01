#import libraries
import barcode
import sys
from barcode import get_barcode_class
from barcode.writer import ImageWriter
import img2pdf


#sys input
btype=sys.argv[1]
text=sys.argv[2]
etype=sys.argv[3]

counter=0

#convert barcode type in string object
btype=str(btype)
btype=btype.lower()
#set a pointer of a type
pointer=get_barcode_class(btype)
#set text in converting string

if etype.upper() =="SVG":
    POINTER=pointer(u''+text+'')
    filepath="Barcodes/"+text
    POINTER.save(filepath)
if etype.upper() =="PNG":
    POINTER= pointer(u''+text+'', writer=ImageWriter())
    filepath="Barcodes/"+text
    POINTER.save(filepath)
if etype.upper() =="PDF":
    POINTER= pointer(u''+text+'', writer=ImageWriter())
    filepath="Barcodes/"+text
    POINTER.save(filepath)
    with open("Barcodes/"+text+".pdf","wb") as f:
        f.write(img2pdf.convert('Barcodes/'+text+'.png'))

sys.stdout.flush()








