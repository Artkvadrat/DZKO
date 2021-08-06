import React from "react";
import "./tables.css";

const ForkChain = () => {
    return (
        <div className="myTable">
        <table>
            <thead>
                <tr>
                    <td>Шаг цепи номинальный</td>
                    <td>Ширина звена</td>
                    <td>Толщина вилки звена</td>
                    <td>Толщина стержня звена</td>
                    <td>Толщина хвостовика звена</td>
                    <td>Расстояние между внутренними плоскостями вилки</td>
                    <td>Длина вилки звена</td>
                    <td>Диаметр пальца</td>
                    <td>Длина пальца</td>
                    <td>Диаметр отверстия под шплинт</td>
                    <td>Масса 1 метра цепи</td>
                    <td>Разруш. нагрузка</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>t</td>
                    <td>B</td>
                    <td>S</td>
                    <td>S1</td>
                    <td>S2 max</td>
                    <td>L</td>
                    <td>L2</td>
                    <td>d</td>
                    <td>L1 max</td>
                    <td>d1</td>
                    <td>q</td>
                    <td>Q min</td>
                </tr>
                <tr>
                    <td>мм</td>
                    <td>мм</td>
                    <td>мм</td>
                    <td>мм</td>
                    <td>мм</td>
                    <td>мм</td>
                    <td>мм</td>
                    <td>мм</td>
                    <td>мм</td>
                    <td>мм</td>
                    <td>кг/м</td>
                    <td>кН/кгс</td>
                </tr>
                <tr>
                    <td>100</td>
                    <td>38</td>
                    <td>27</td>
                    <td>8</td>
                    <td>11</td>
                    <td>12</td>
                    <td>30</td>
                    <td>16</td>
                    <td>48</td>
                    <td>4</td>
                    <td>4.9</td>
                    <td>160/16000</td>
                </tr>
                <tr>
                    <td>125</td>
                    <td>42</td>
                    <td>35</td>
                    <td>10</td>
                    <td>15</td>
                    <td>16</td>
                    <td>36</td>
                    <td>20</td>
                    <td>56</td>
                    <td>4</td>
                    <td>7.6</td>
                    <td>240/24000</td>
                </tr>
                <tr>
                    <td>160</td>
                    <td>50</td>
                    <td>43</td>
                    <td>12</td>
                    <td>20</td>
                    <td>22</td>
                    <td>45</td>
                    <td>25</td>
                    <td>70</td>
                    <td>6</td>
                    <td>9.5</td>
                    <td>400/40000</td>
                </tr>
                <tr>
                    <td>200</td>
                    <td>64</td>
                    <td>52</td>
                    <td>15</td>
                    <td>23</td>
                    <td>25</td>
                    <td>56</td>
                    <td>32</td>
                    <td>82</td>
                    <td>6</td>
                    <td>15.6</td>
                    <td>640/64000</td>
                </tr>
                <tr>
                    <td>250</td>
                    <td>80</td>
                    <td>66</td>
                    <td>18</td>
                    <td>30</td>
                    <td>32</td>
                    <td>70</td>
                    <td>40</td>
                    <td>95</td>
                    <td>6</td>
                    <td>23.5</td>
                    <td>1000/100000</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
};

export default ForkChain;