import dayjs, { Dayjs } from 'dayjs'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useState } from 'react'
import Grid from '@mui/material/Unstable_Grid2'
import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableRow,
} from '@mui/material'
import { useGames } from '../../hooks/swr/games'
import { JsonViewer } from '@textea/json-viewer'
import { useDatasets } from '../../hooks/swr/dataset'

export const GamesIndex = () => {
  const { data: datasets } = useDatasets()
  const [startDate, setStartDate] = useState<Dayjs | null>(
    dayjs().subtract(1, 'day')
  )
  const [endDate, setEndDate] = useState<Dayjs | null>(
    dayjs().subtract(1, 'day')
  )
  const [datasetId, setDatasetId] = useState<string>('')

  const handleChangeDatasetId = (event: SelectChangeEvent) => {
    setDatasetId(event.target.value as string)
  }

  const games = useGames(
    datasetId,
    startDate?.format('YYYY-MM-DD') ?? '',
    endDate?.format('YYYY-MM-DD') ?? ''
  )

  return (
    <Grid container columnSpacing={2}>
      <Grid xs={4}>
        {/* フォームをいれる(のちのちcomponent化) */}
        <Stack spacing={2} direction="column">
          <Select
            labelId="datasetId"
            id="datasetId"
            value={datasetId}
            onChange={handleChangeDatasetId}
          >
            {datasets?.map((dataset) => (
              <MenuItem value={dataset.id}>{dataset.friendly_name}</MenuItem>
            ))}
          </Select>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="start date"
              value={startDate}
              onChange={setStartDate}
            />
            <DatePicker
              label="end date"
              value={endDate}
              onChange={setEndDate}
            />
          </LocalizationProvider>
        </Stack>
      </Grid>
      <Grid xs={8}>
        {/* APIの結果表示 */}
        <TableContainer>
          <Table>
            <TableBody>
              {games.data?.map((game) => (
                <TableRow>
                  <JsonViewer value={game} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}
