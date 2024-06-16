import LiquidFillGauge from 'react-liquid-gauge'
import { interpolateRgb } from 'd3-interpolate'
import { color } from 'd3-color'

function Tank({ value, max = 100 }) {
    const radius = 100
    const interpolate = interpolateRgb('#6495ed', '#dc143c')
    const fillColor = interpolate(value / max)

    return (
        <>
            <LiquidFillGauge
                width={radius * 2}
                height={radius * 2}
                value={value}
                // percent="%"
                textSize={1}
                textOffsetX={0}
                textOffsetY={0}
                textRenderer={(props) => {
                    const value = Math.round(props.value)
                    const radius = Math.min(props.height / 2, props.width / 2)
                    const textPixels = (props.textSize * radius / 2)
                    const valueStyle = {
                        fontSize: textPixels
                    }
                    const percentStyle = {
                        fontSize: textPixels * 0.6
                    }

                    return (
                        <tspan>
                            <tspan className="value" style={valueStyle}>{value}</tspan>
                            {/* <tspan style={percentStyle}>{props.percent}</tspan> */}
                        </tspan>
                    )
                }}
                riseAnimation
                waveAnimation
                waveFrequency={2}
                waveAmplitude={1}
                gradient
                circleStyle={{
                    fill: fillColor
                }}
                waveStyle={{
                    fill: fillColor
                }}
                textStyle={{
                    fill: color('#444').toString(),
                    fontFamily: 'Arial'
                }}
                waveTextStyle={{
                    fill: color('#fff').toString(),
                    fontFamily: 'Arial'
                }}
            />
        </>
    )
}

export default Tank