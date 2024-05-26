import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { getAirQualityClassNames } from "@/lib/utils"

  function KualitasUdaraTerakhirWidged({ data }) {
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
                <TableBody className="text-slate-600">
                    {data?.map((x, key) => {
                        return (
                            <TableRow key={key}>
                                <TableCell className="font-medium">{x.name}</TableCell>
                                <TableCell className="font-medium">{x.average_temperature}</TableCell>
                                <TableCell className="font-medium">{x.average_humidity}</TableCell>
                                <TableCell>
                                    <Badge className={`text-white uppercase ${(getAirQualityClassNames(x.category))}`}>{x.category}</Badge>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default KualitasUdaraTerakhirWidged