import React from "react";
import "./tables.css";

const FoldingChain = () => {
    return (
        <div className="myTable">
        <table>
            <thead>
            <tr>
                <td rowSpan={4}>Наименование</td>
                <td rowSpan={2}>Шаг звена расчетный</td>
                <td rowSpan={2}>Шаг зацепления номинальный</td>
                <td rowSpan={2}>Предельные отклонения</td>
                <td rowSpan={2}>Ширина звена</td>
                <td rowSpan={2}>Расстояние между наружными звеньями</td>
                <td rowSpan={2}>Длина валика</td>
                <td colSpan={2}>Нагрузка</td>
                <td rowSpan={2}>Удлинение общее при пробной нагрузке</td>
                <td rowSpan={2}>Удлинение общее на разрыве</td>
                <td rowSpan={2}>Масса 1 м цепи</td>
                <td rowSpan={2}>Удельная масса</td>
            </tr>
            <tr>
                <td>пробная</td>
                <td>разрушающая</td>
            </tr>
            <tr>
                <td>P</td>
                <td>P1</td>
                <td>Д Тц</td>
                <td>h2 max</td>
                <td>Lc min</td>
                <td>L max</td>
                <td>Qп</td>
                <td>Qp</td>
                <td>n max</td>
                <td>p min</td>
                <td>q max</td>
                <td>max</td>
            </tr>
            <tr>
                <td colSpan={6}>мм</td>
                <td colSpan={2}>кН</td>
                <td colSpan={2}>%</td>
                <td>кг</td>
                <td>Кг/кН</td>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>Р1-63-63</td>
                <td>63</td>
                <td>126</td>
                <td>±2,0</td>
                <td>18</td>
                <td>15</td>
                <td>35</td>
                <td>38</td>
                <td>63</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>1,4</td>
                <td>0,0272</td>
            </tr>
            <tr>
                <td>Р1-80-106</td>
                <td>80</td>
                <td>160</td>
                <td>±2,5</td>
                <td>30</td>
                <td>21</td>
                <td>48</td>
                <td>60</td>
                <td>106</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>3,2</td>
                <td>0,0301</td>
            </tr>
            <tr>
                <td>Р1-80-290</td>
                <td>80</td>
                <td>160</td>
                <td>±2,5</td>
                <td>42</td>
                <td>32</td>
                <td>73</td>
                <td>174</td>
                <td>290</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>8,7</td>
                <td>0,03</td>
            </tr>
            <tr>
                <td>Р1-100-160</td>
                <td>100</td>
                <td>200</td>
                <td>±2,5</td>
                <td>32</td>
                <td>27</td>
                <td>56</td>
                <td>96</td>
                <td>96</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>3,8</td>
                <td>0,0237</td>
            </tr>
            <tr>
                <td>Р1-100-220</td>
                <td>100</td>
                <td>200</td>
                <td>±2,5</td>
                <td>37</td>
                <td>27</td>
                <td>60</td>
                <td>132</td>
                <td>220</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>5,2</td>
                <td>0,0236</td>
            </tr>
            <tr>
                <td>Р1-125-250</td>
                <td>125</td>
                <td>250</td>
                <td>±3,0</td>
                <td>46</td>
                <td>34</td>
                <td>73</td>
                <td>150</td>
                <td>250</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>7,4</td>
                <td>0,0296</td>
            </tr>
            <tr>
                <td>Р1-160-290</td>
                <td>160</td>
                <td>320</td>
                <td>±3,0</td>
                <td>40</td>
                <td>34</td>
                <td>73</td>
                <td>174</td>
                <td>290</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>5,7</td>
                <td>0,0196</td>
            </tr>
            <tr>
                <td>Р1-200-630</td>
                <td>200</td>
                <td>400</td>
                <td>±3,0</td>
                <td>66</td>
                <td>52</td>
                <td>107</td>
                <td>380</td>
                <td>630</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>16,5</td>
                <td>0,0262</td>
            </tr>
            <tr>
                <td>Р1-250-1000</td>
                <td>250</td>
                <td>500</td>
                <td>±3,0</td>
                <td>80</td>
                <td>63</td>
                <td>127</td>
                <td>600</td>
                <td>1000</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>24</td>
                <td>0,024</td>
            </tr>
            <tr>
                <td>Р2-63-63</td>
                <td>63</td>
                <td>126</td>
                <td>±2,0</td>
                <td>18</td>
                <td>15</td>
                <td>35</td>
                <td>38</td>
                <td>63</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>1,4</td>
                <td>0,0272</td>
            </tr>
            <tr>
                <td>Р2-80-106</td>
                <td>80</td>
                <td>160</td>
                <td>±2,5</td>
                <td>30</td>
                <td>21</td>
                <td>48</td>
                <td>60</td>
                <td>106</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>3,2</td>
                <td>0,0301</td>
            </tr>
            <tr>
                <td>Р2-80-290</td>
                <td>80</td>
                <td>160</td>
                <td>±2,5</td>
                <td>42</td>
                <td>32</td>
                <td>73</td>
                <td>174</td>
                <td>290</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>8,7</td>
                <td>0,03</td>
            </tr>
            <tr>
                <td>Р2-100-160</td>
                <td>100</td>
                <td>200</td>
                <td>±2,5</td>
                <td>32</td>
                <td>27</td>
                <td>56</td>
                <td>96</td>
                <td>160</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>3,8</td>
                <td>0,0237</td>
            </tr>
            <tr>
                <td>Р2-100-220</td>
                <td>100</td>
                <td>200</td>
                <td>±2,5</td>
                <td>37</td>
                <td>27</td>
                <td>60</td>
                <td>132</td>
                <td>220</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>5,2</td>
                <td>0,0236</td>
            </tr>
            <tr>
                <td>Р2-125-250</td>
                <td>125</td>
                <td>250</td>
                <td>±3,0</td>
                <td>46</td>
                <td>34</td>
                <td>73</td>
                <td>150</td>
                <td>150</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>7,4</td>
                <td>0,0296</td>
            </tr>
            <tr>
                <td>Р2-160-290</td>
                <td>160</td>
                <td>320</td>
                <td>±3,0</td>
                <td>40</td>
                <td>34</td>
                <td>73</td>
                <td>174</td>
                <td>290</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>5,7</td>
                <td>0,0196</td>
            </tr>
            <tr>
                <td>Р2-160-400</td>
                <td>160</td>
                <td>320</td>
                <td>±3,0</td>
                <td>59</td>
                <td>42</td>
                <td>92</td>
                <td>240</td>
                <td>400</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>9,1</td>
                <td>0,0227</td>
            </tr>
            <tr>
                <td>Р2-200-630</td>
                <td>200</td>
                <td>400</td>
                <td>±3,0</td>
                <td>66</td>
                <td>52</td>
                <td>107</td>
                <td>380</td>
                <td>630</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>16,5</td>
                <td>0,0262</td>
            </tr>
            <tr>
                <td>Р2-250-1000</td>
                <td>250</td>
                <td>500</td>
                <td>±3,0</td>
                <td>80</td>
                <td>63</td>
                <td>127</td>
                <td>600</td>
                <td>1000</td>
                <td>1,8</td>
                <td>4,5</td>
                <td>24</td>
                <td>0,024</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
};

export default FoldingChain;