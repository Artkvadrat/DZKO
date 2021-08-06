import React from "react";
import './tables.css';

const DriveRollerChains = () => {
    return (
        <div className="myTable">
        <table>
            <thead>
                <tr>
                    <td rowSpan={2}>Цепь</td>
                    <td rowSpan={2}>Разрушающая нагрузка, кН</td>
                    <td>Шаг t</td>
                    <td>Диаметр ролика</td>
                    <td>Диаметр валика</td>
                    <td>Ширина внутреняя</td>
                    <td rowSpan={2}>Масса 1 м, кг</td>
                </tr>
                <tr>
                    <td colSpan={4}>мм</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <br/>
                        ПР-12.7-1800-1<br/>
                        ПР-12.7-1800-2<br/>
                        ПР-15.875-2300-1<br/>
                        ПР-12.7-23000-2<br/>
                        ПР-19.05-2500<br/>
                        ПР-25.4-5000<br/>
                        ПР-38.1-10000<br/>
                        ПР-44.45-13000<br/>
                        ПР-50.8-16000<br/>
                    </td>
                    <td>
                        9<br/>
                        18<br/>
                        18<br/>
                        23<br/>
                        23<br/>
                        25<br/>
                        50<br/>
                        100<br/>
                        130<br/>
                        160<br/>
                    </td>
                    <td>
                        12.700<br/>
                        12.700<br/>
                        12.700<br/>
                        15.875<br/>
                        15.875<br/>
                        19.050<br/>
                        25.400<br/>
                        38.100<br/>
                        44.450<br/>
                        50.800<br/>
                    </td>
                    <td>
                        7.75<br/>
                        8.51<br/>
                        8.51<br/>
                        10.16<br/>
                        10.16<br/>
                        11.91<br/>
                        15.88<br/>
                        22.23<br/>
                        25.40<br/>
                        28.58<br/>
                    </td>
                    <td>
                        3.66<br/>
                        4.45<br/>
                        4.45<br/>
                        5.08<br/>
                        5.08<br/>
                        5.96<br/>
                        7.95<br/>
                        11.12<br/>
                        12.72<br/>
                        14.29<br/>
                    </td>
                    <td>
                        3.30<br/>
                        5.40<br/>
                        7.75<br/>
                        6.48<br/>
                        9.68<br/>
                        12.70<br/>
                        15.88<br/>
                        22.23<br/>
                        25.40<br/>
                        31.75<br/>
                    </td>
                    <td>
                        0.31<br/>
                        0.62<br/>
                        0.71<br/>
                        0.80<br/>
                        0.96<br/>
                        1.52<br/>
                        2.57<br/>
                        5.50<br/>
                        7.50<br/>
                        9.70<br/>
                    </td>
                </tr>
                <tr>
                    <td>
                        ПРУ-19.05-3200<br/>
                        ПРУ-25.4-6000<br/>
                        ПРУ-31.75-8900<br/>
                        ПРУ-38.1-12700<br/>
                        ПРУ-44.45-17200<br/>
                        ПРУ-50.7-22700<br/>
                    </td>
                    <td>
                        32<br/>
                        60<br/>
                        89<br/>
                        127<br/>
                        172<br/>
                        227<br/>
                    </td>
                    <td>
                        19.050<br/>
                        25.400<br/>
                        31.750<br/>
                        38.100<br/>
                        44.450<br/>
                        50.800<br/>
                    </td>
                    <td>
                        11.91<br/>
                        15.88<br/>
                        19.05<br/>
                        22.23<br/>
                        25.40<br/>
                        28.58<br/>
                    </td>
                    <td>
                        5.96<br/>
                        7.95<br/>
                        9.55<br/>
                        11.12<br/>
                        12.72<br/>
                        14.29<br/>
                    </td>
                    <td>
                        12.70<br/>
                        15.88<br/>
                        19.05<br/>
                        22.23<br/>
                        25.40<br/>
                        31.75<br/>
                    </td>
                    <td>
                        1.52<br/>
                        2.57<br/>
                        3.73<br/>
                        5.50<br/>
                        7.50<br/>
                        9.70<br/>
                    </td>
                </tr>
                <tr>
                    <td>
                        ПРД-31.75-2300<br/>
                        ПРД-38.1-2500<br/>
                        ПРД-38-3000<br/>
                        ПРД-50.8-5000<br/>
                        ПРД-63.5-7000<br/>
                        ПРД-76.2-10000<br/>
                    </td>
                    <td>
                        23<br/>
                        25<br/>
                        30<br/>
                        50<br/>
                        70<br/>
                        100<br/>
                    </td>
                    <td>
                        31.750<br/>
                        38.100<br/>
                        38.000<br/>
                        50.800<br/>
                        63.500<br/>
                        76.200<br/>
                    </td>
                    <td>
                        10.16<br/>
                        11.91<br/>
                        16.00<br/>
                        15.88<br/>
                        19.05<br/>
                        22.23<br/>
                    </td>
                    <td>
                        5.08<br/>
                        5.96<br/>
                        7.95<br/>
                        7.95<br/>
                        9.55<br/>
                        11.12<br/>
                    </td>
                    <td>
                        9.65<br/>
                        12.70<br/>
                        22.00<br/>
                        15.88<br/>
                        19.05<br/>
                        25.40<br/>
                    </td>
                    <td>
                        0.58<br/>
                        1.10<br/>
                        1.75<br/>
                        1.90<br/>
                        2.60<br/>
                        3.80<br/>
                    </td>
                </tr>
                <tr>
                    <td>
                        ПРИ-78.1-36000<br/>
                        ПРИ-78.1-40000<br/>
                        ПРИ-103.2-65000<br/>
                        ПРИ-140-120000<br/>
                    </td>
                    <td>
                        360<br/>
                        400<br/>
                        650<br/>
                        1200<br/>
                    </td>
                    <td>
                        78.100<br/>
                        78.100<br/>
                        103.200<br/>
                        140.000<br/>
                    </td>
                    <td>
                        33.30<br/>
                        40.00<br/>
                        56.00<br/>
                        65.00<br/>
                    </td>
                    <td>
                        17.15<br/>
                        19.00<br/>
                        24.00<br/>
                        36.00<br/>
                    </td>
                    <td>
                        38.10<br/>
                        38.10<br/>
                        49.00<br/>
                        80.00<br/>
                    </td>
                    <td>
                        14.50<br/>
                        16.30<br/>
                        27.70<br/>
                        63.00<br/>
                    </td>
                </tr>
                <tr>
                    <td>
                        2ПР-12.7-3200<br/>
                        2ПР-15.875-4500<br/>
                        2ПР-19.05-6400<br/>
                        2ПР-25.4-11400<br/>
                        2ПР-31.75-17700<br/>
                        2ПР-38.1-25400<br/>
                        2ПР-44.45-34400<br/>
                        2ПР-50.8-45400<br/>
                    </td>
                    <td>
                        32<br/>
                        45<br/>
                        64<br/>
                        114<br/>
                        177<br/>
                        254<br/>
                        344<br/>
                        454<br/>
                    </td>
                    <td>
                        12.700<br/>
                        15.875<br/>
                        19.050<br/>
                        25.400<br/>
                        31.750<br/>
                        38.100<br/>
                        44.450<br/>
                        50.800<br/>
                    </td>
                    <td>
                        8.51<br/>
                        10.16<br/>
                        11.91<br/>
                        15.88<br/>
                        19.05<br/>
                        22.23<br/>
                        25.40<br/>
                        28.58<br/>
                    </td>
                    <td>
                        11.30<br/>
                        13.28<br/>
                        17.75<br/>
                        22.61<br/>
                        27.46<br/>
                        35.46<br/>
                        37.19<br/>
                        45.21<br/>
                    </td>
                    <td>
                        4.45<br/>
                        5.08<br/>
                        5.96<br/>
                        7.95<br/>
                        9.55<br/>
                        11.12<br/>
                        12.72<br/>
                        14.29<br/>
                    </td>
                    <td>
                        1.35<br/>
                        1.85<br/>
                        2.90<br/>
                        5.00<br/>
                        7.30<br/>
                        11.00<br/>
                        14.36<br/>
                        19.10<br/>
                    </td>
                </tr>
                <tr>
                    <td>
                        3ПР-12.7-4600<br/>
                        3ПР-15.875-6800<br/>
                        3ПР-19.05-9600<br/>
                        3ПР-25.4-17100<br/>
                        3ПР-31.75-26000<br/>
                        3ПР-38.1-38100<br/>
                        3ПР-44.45-51600<br/>
                        3ПР-50.8-68100<br/>
                    </td>
                    <td>
                        46<br/>
                        68<br/>
                        96<br/>
                        171<br/>
                        260<br/>
                        381<br/>
                        516<br/>
                        681<br/>
                    </td>
                    <td>
                        12.700<br/>
                        15.875<br/>
                        19.050<br/>
                        25.400<br/>
                        31.750<br/>
                        38.100<br/>
                        44.450<br/>
                        50.800<br/>
                    </td>
                    <td>
                        8.51<br/>
                        10.16<br/>
                        11.91<br/>
                        15.88<br/>
                        19.05<br/>
                        22.23<br/>
                        25.40<br/>
                        28.58<br/>
                    </td>
                    <td>
                        11.30<br/>
                        13.28<br/>
                        17.75<br/>
                        22.61<br/>
                        27.46<br/>
                        35.46<br/>
                        37.19<br/>
                        45.21<br/>
                    </td>
                    <td>
                        4.45<br/>
                        5.08<br/>
                        5.96<br/>
                        7.95<br/>
                        9.55<br/>
                        11.12<br/>
                        12.72<br/>
                        14.29<br/>
                    </td>
                    <td>
                        2.00<br/>
                        2.80<br/>
                        4.30<br/>
                        7.47<br/>
                        11.01<br/>
                        16.05<br/>
                        21.70<br/>
                        28.20<br/>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    )
};

export default DriveRollerChains;