import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

  function KualitasUdaraTerakhirWidged({ data }) {

    const getClassName = (category) => {
        if( category === 'god' ) return 'bg-green-500 hover:bg-green-400'
        if( category === 'normal' ) return 'bg-green-500 hover:bg-green-400'
        
        return 'bg-red-500 hover:bg-red-400'
    }

    return (
        <div className="w-full">
            <Table>
                <TableCaption>Data 7 Hari Terakhir.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-full">Tanggal</TableHead>
                        <TableHead>Rata Rata Temperatur</TableHead>
                        <TableHead>Rata Rata Kelembapan</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.map((x, key) => {
                        return (
                            <TableRow key={key}>
                                <TableCell className="font-medium">{x.name}</TableCell>
                                <TableCell className="font-medium">{x.average_temperature}</TableCell>
                                <TableCell className="font-medium">{x.average_humidity}</TableCell>
                                <TableCell>
                                    <Badge className={`uppercase ${(getClassName(x.category))}`}>{x.category}</Badge>
                                </TableCell>
                                {/* <TableCell className={'uppercase font-semibold ' + (getClassName(x.category))}>{x.category}</TableCell> */}
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default KualitasUdaraTerakhirWidged