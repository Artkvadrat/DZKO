import React from "react";
import "./tables.css";

const Talrep = () => {
    return (
        <table className="myTable">
            <thead>
                <tr>
                    <td>Название по ГОСТ 9690-71</td>
                    <td>Название по ОСТ 5,2314-71</td>
                    <td>Резьба талрепа</td>
                    <td>Доп. нагрузка, тн</td>
                    <td>Ход талрепа, мм</td>
                    <td>L, мм</td>
                    <td>L1, мм</td>
                    <td>Вес, кг</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>0,3 ВВ-ОШ</td>
                    <td>3-ОШ-ВВ</td>
                    <td>M10</td>
                    <td>0.3</td>
                    <td>112</td>
                    <td>341</td>
                    <td>229</td>
                    <td>0.50</td>
                </tr>
                <tr>
                    <td>0,5 ВВ-ОШ</td>
                    <td>5-ОШ-ВВ</td>
                    <td>M12</td>
                    <td>0.5</td>
                    <td>140</td>
                    <td>421</td>
                    <td>281</td>
                    <td>0.92</td>
                </tr>
                <tr>
                    <td>0,8 ВВ-ОШ</td>
                    <td>8-ОШ-ВВ</td>
                    <td>M14</td>
                    <td>0.8</td>
                    <td>140</td>
                    <td>434</td>
                    <td>294</td>
                    <td>1.10</td>
                </tr>
                <tr>
                    <td>1,2 ВВ-ОШ</td>
                    <td>12-ОШ-ВВ</td>
                    <td>M16</td>
                    <td>1.2</td>
                    <td>168</td>
                    <td>524</td>
                    <td>356</td>
                    <td>1.9</td>
                </tr>
                <tr>
                    <td>1,6 ВВ-ОШ</td>
                    <td>16-ОШ-ВВ</td>
                    <td>M18</td>
                    <td>1.6</td>
                    <td>168</td>
                    <td>542</td>
                    <td>374</td>
                    <td>2.26</td>
                </tr>
                <tr>
                    <td>2,0 ВВ-ОШ</td>
                    <td>20-ОШ-ВВ</td>
                    <td>M20</td>
                    <td>2.0</td>
                    <td>185</td>
                    <td>603</td>
                    <td>418</td>
                    <td>3.60</td>
                </tr>
                <tr>
                    <td>2,5 ВВ-ОШ</td>
                    <td>25-ОШ-ВВ</td>
                    <td>M22</td>
                    <td>2.5</td>
                    <td>185</td>
                    <td>629</td>
                    <td>444</td>
                    <td>4.20</td>
                </tr>
                <tr>
                    <td>3,2 ВВ-ОШ</td>
                    <td>32-ОШ-ВВ</td>
                    <td>M24</td>
                    <td>3.2</td>
                    <td>212</td>
                    <td>719</td>
                    <td>507</td>
                    <td>6.00</td>
                </tr>
                <tr>
                    <td>4,0 ВВ-ОС</td>
                    <td>40-ОС-ВВ</td>
                    <td>M27</td>
                    <td>4.0</td>
                    <td>212</td>
                    <td>757</td>
                    <td>545</td>
                    <td>7.20</td>
                </tr>
                <tr>
                    <td>5,0 ВВ-ОС</td>
                    <td>50-ОС-ВВ</td>
                    <td>M27</td>
                    <td>5.0</td>
                    <td>248</td>
                    <td>881</td>
                    <td>633</td>
                    <td>12.80</td>
                </tr>
                <tr>
                    <td>6,3 ВВ-ОС</td>
                    <td>63-ОС-ВВ</td>
                    <td>M36</td>
                    <td>6.3</td>
                    <td>248</td>
                    <td>900</td>
                    <td>652</td>
                    <td>14.50</td>
                </tr>
                <tr>
                    <td>8,0 ВВ-ОС</td>
                    <td>80-ОС-ВВ</td>
                    <td>M39</td>
                    <td>8.0</td>
                    <td>265</td>
                    <td>1027</td>
                    <td>762</td>
                    <td>23.60</td>
                </tr>
                <tr>
                    <td>12,5 ВВ-ОС</td>
                    <td>125-ОС-ВВ</td>
                    <td>M48</td>
                    <td>12.5</td>
                    <td>290</td>
                    <td>1133</td>
                    <td>843</td>
                    <td>35.00</td>
                </tr>
                <tr>
                    <td>16,0 ВВ-ОС</td>
                    <td>160-ОС-ВВ</td>
                    <td>M52</td>
                    <td>16.0</td>
                    <td>290</td>
                    <td>1159</td>
                    <td>869</td>
                    <td>46.00</td>
                </tr>
                <tr>
                    <td>20,0 ВВ-ОС</td>
                    <td>200-ОС-ВВ</td>
                    <td>M56</td>
                    <td>20.0</td>
                    <td>308</td>
                    <td>1247</td>
                    <td>939</td>
                    <td>55.30</td>
                </tr>
            </tbody>
        </table>
    )
};

export default Talrep;