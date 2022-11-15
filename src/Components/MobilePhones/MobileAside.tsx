import { useEffect, useState } from 'react'

type MobileAsidePropsType = {
  showbrand : React.Dispatch<React.SetStateAction<string>>
}

export default function MobileAside(props: MobileAsidePropsType) {
  const [brand, setbrand] = useState<string>("original")

  useEffect(() => {
    props.showbrand(brand)
  }, [brand])

  return (
    <aside className="mobileAside">
      <h2>Brands</h2>
      <ul >
        <li className="section" onClick={() => setbrand("apple")}>
          <img src="https://lh3.googleusercontent.com/WW3F48QWXnLW6zVW14AsrARJMzN5NLs1G6mvUdo0YHxLp4AFGVTKvTq6MojBSecid6j_Xip091sAECnbkdO1PGMzc2PrAuaSivgX9WTID752WB5398fEcSu2BaW7frpS801a3qLvZqM2NGL4cLOrCaRVNCqXS5PragJZ3q7Q5PtwqlxVkAP6XzOsXVGsRer5aQt-IeqB4mz-QPgUVer-MpWF34sa6VX8KkDY5sAZXjTzriSR9E5Wsd69DZ09jv-S_ReeGP-m5Wp_jZbgiZxmQnYKJ_xZs4ftgj4HxiR3bGhA-ZgXp2-udDwowFjkHijrXFZtXrgWC5dRsgNPAnxgoFnCNgLjhIZVDfQWkRnkt4gzkII7k2pRWZNS2R4oB8Dm-q9ddFalv6ZFbOElPd-ODeoeYx9gq2scdFtxhYYcmiKaAM0j0-Z9aBzMkGKWKc0ebafA3IT4ZzFQz6WLXNHe06XPZPpDVqWPj6zJ9fo7Vu5IAjDf1lHWl4EcKNZMSppAEjrVWkbFI0N-VFS-38ttj3STQ1tQ9asIACDpTc2f0dREcBgg-wLuD7QCKFzLMwsrs7LCQNRYeSckP4BWY7t8pORfyOhgnfvpq19lhCUPUVpcPdM1P-CE3PFp5qvAPmBJ4FRxZ12L12I0k0znBSDsLJEkqhhYxUN2mPLgBuhQRhQnmWskwk6C3Vnhk7tkkM6H8ryXn9jBeHDoS2nuX7vX1L4AnxssiQ3AwGvDYSua9iYZc6ixQKmarFLRDOcZ087R9_edtWRhw_Y37EJ7PQTRNBmSpVv3Rv_SAF42LNP4xfoT2bGULQEDBt6AexazQQdi3aPDMLbk7E-5T7YiONVrKijD9hrRK8bHxqgPmWxl8pPM2-SpztsOTBMZx4a47C2amnWLdrAJTkffK8MKqnOQTCXjUDsaD4DhkjvPZ23kmTOqJ0X-=w679-h898-no?authuser=0" referrerPolicy="no-referrer"></img>
          <h3 >Apple</h3>
        </li>

        <li className="section" onClick={() => setbrand("samsung")}>
          <img src="https://lh3.googleusercontent.com/rx1R6zhPz1SiyrQs5kKmO1tW3xstS6Od1sn0oPxp1WaM3lWZrNXDAu3DDrHRt4HFjhg7CtKaLVGx4Prx7OeqdTgvQwxoF9skG75Me-McJxzjH5iMOoMldJIKOHxA5VucWHbIv_kYlyzW6tLeUi9t2hlOT_94o9VI4P7gvYcKKUtDhz7MXOvOd1gSCeiSspiaR5R5TJkPjqavABmUsnEVdxmjXo-wWj196rcahWCgi3uy52pKOWHR8GW-EYS1HvIsnJn1gtPpdKtC4FLXEtgQJNeNSHMnv6p_d0yDHmRlKm2EmLbuwrmu9kA734mTO_fNbDHKiRgHkQQu9-cRX4IlM7uKFcWdt1L1jqEKG1rickBAsyvZFd6wfzIOSEvbBW-kUZylJiTnLWlB2OFnPGqNXjwyj2kqkTyJll018bBK8Ayr5S_ANmBeAAmP4-eKeGzLG7Hme1knQXMTLBklzhBF1F8gBgWO9IKn0-Qe8jiOpE8DwztgFma1RccXgDbjH9lRKEpm3hUMRyJkkgew1fLAFx6rI4lBAfGI0qMKMjZk6MsHC7a5g_6VeGCwba5ZZRy2TpSPO6PnuU4XL9yVGBB9cB0Jq48RBkyBxVCYMUe8sNf4GjUVLsOihZfTpJeg4j8SHbZSU_l8wQsi1xUDwMyABUqe6uc3PHd67XM9gvryzBTE_qKJ9rrOq4hDipXAeiv2ocwpTMmF6PfKk0r3Wd0CXvn7vdsVyE0mkq4yBASCZWux8FshiHTSf3iiiIz9AsRfSL5mvJQfHny0wwCyOvco3lHFjdaqqq15GnjfdT6ySeNS-YxduhFk4I--KmG5oFFWZfmyUZ6TuGrCbbNXZm_KHfnwTouzDvloZU71LCg7dfCxdI5Y8uZSuDhFWTV6--9ec-YcY2sAig_EEcXgkh_WonW0Pp35aBg1NIiH4cOwdH-aofIc=w679-h860-no?authuser=0" referrerPolicy="no-referrer"></img>
          <h3 >Samsung</h3>
        </li>

        <li className="section" onClick={() => setbrand("oppo")}>
          <img src="https://lh3.googleusercontent.com/yFzGVMRYxZE9hUliwKPb9oMUMFehPr5IS91gtLusVV-aJpArveNwpVwHJkhY47hkcVpfuU4MU2L-DxpPVtk1GuJoJhxujMIrcvs7lAnQo-QhJo_UwylgTHBAc17oxzRv6CbbbnOGs4wrS9K7TuVCFyKSYq4yBII6l_yOvG6q4mMZqziL4XcGdhJixqDElZSJt1h7Wpsc8bPeSeBFsgiNgmQg-IYEjycKSwe6UuyX4G-AJR247yfMUium_1LkVA1VyVFZqPrUg5z3zrtGdwT_RQABa1OeaKBfrUEPM-CvIYGNuEmar0R1Wkowb40_mulaUw_KIliTXJSKBGhEGUAanbI0gKG8LmvMHg29YkLMeOBb1t3iC3t1y5CMgViaVqcdM3ebZtQUTr6LDquo68JQN8me3J_6U2z9ydQnRo48z9M077QlPN6wb3sijpQJVKtaCVTkHwnq1hRuK20WhfoO5O71mZ8cxuMQ3SalFOmBDj3G7EuRjWghA7zjZCsc8xCoWVuiys49ql3HVEek1sB6mb2L0kr1Cix80gM4_ePsUUw9jX2atPsYlJJ3t5cZZ8BdSMgQ4K5ZGp46eGgGFcqnUCQDTjgGO5dSAT3meIWn5nNFPUUROZA9n3Y7c3itdJdQL9Bw7Q5liXjkK5UDxPgQp0mD32M_DfuZp1L1054EEjznZUH-dPqeH6qgFIJ0BQTjQF9VAZBZtlvztJR-ZqJ1ZwLwQlp14OWmdi1cZROyhropB-iKgivbdS9xL1OtoAUaxSfLB5FO4yK1imGeHRp05hF49w6d8DrDBbmi4L790Uc1zX-B9pAdycmaSAciVFFnkOqAODWQDyBZPcDbjAfCfsZPdQ9QYqXwzDSOY6j2zp36WKohZRZ_qNhu7UHEkmac-kUCBI_lnYLB0T9gBsQGPHWw0Y31B8MVXygk2iSVUc0JoZo1=w529-h739-no?authuser=0" referrerPolicy="no-referrer"></img>
          <h3 >Oppo</h3>
        </li>

        <li className="section" onClick={() => setbrand("vivo")}>
          <img src="https://lh3.googleusercontent.com/_K9o_EMjM7Z8fTNsUZgRznib_ta7yjzA4ZNEdRudc9s0YgeCmFAqfEisRPoh8fLNaxAIxLSJO6N_U_ZvINCaMvyHSOdDF4H2uoqdwAvSTF_3_f92ZzTK91swQq6x3HTj-5KC1jOa1ysM8_P8sG7k1D2GDiTFAiyyboYQ7h9T9LJ_uVle5PIqaGtfGe-yLL7ytFsXi44UUurhc5Ajz1szZJMh1L1WUz2rzkMUHLVdIAJSCD9dEm6S3oOyf-QpsDcu59DCgr8Idxu1T9daY4jPKFHR_ke5W8MTOxR-XlEA1YlG9Qtvb7bRVxCkJmaAD_IOl-DvvIq5XzNq_T9kCaWvvMjq-eYDyp_ihtQZmVC05_h1y10U_r_NhZ3G-Rmx0RrZ4VnJRONYxEHgF4qGxnxj4HDW08lt_Mk9w-l4PncN3WVs-nmEEm3iEmO3lsu2OlMARFdpcX2rMKCbimqWl8MfRFaY8mjHl6fhG9asqy3E8B42TOYDSiSAZ-eoRj62wYZVuZQLVMDmRt3Ur6XJ4DdllRzRk-dFoT5n9MYo3nGKK64ovjCrwWVYpK1Lq3wmtLKIr_1iVHvLsYvaLe79jj8p1416jXGE3PWNXXyNDOq2LkFh9Xc17s3r8SwXpC2xuLOXlh0zoG2wObH5zJfFSTfaak3O1Z5-TnN82Ike2s3qrQOrN6IgVCPQOfrnWnVQY2e4outJPm3l9p8jdWmt_51W26fNoCe1VbVCEHsvTAj48__QaDuyBoJvl0QdW1uy6evDlIgb5fZCmKOugMTVkwTYRjfUdUE8I3Fob-njQoROnsV7VmOm0kJiv-RMT4uTdYdcHchZc17ICeB8o2dhiMeDXGsJvraduH0Zc8eDXbjbGIyqzPxTtkCUT95DbCxvXLUY15gIoIXoFdPj6kMsYKwqNxgGhnwTS20Z1SmQq0SP9WPAWgee=w319-h354-no?authuser=0" referrerPolicy="no-referrer"></img>
          <h3 >Vivo</h3>
        </li>

        <li className="section" onClick={() => setbrand("redmi")}>
          <img src="https://lh3.googleusercontent.com/5rmNF4gkGDL32rM6ajZNJMQoGZEUcuSAZaKVV_Noxieqhh3T1QEae9KPj9dwaeY0djYaoJFRQhIEWmdNx_XRU3F7M9qTg8TWjVQ5u6RnJQ-L4ecaDDtSoHjcyibu5wJneIseP_ZRX_lxVdKoYEUUJJxwfgarMncbr_BVTuWirx6o6_mbMTXApnjg_W7jxBImSprCnOVWHKKAvI5rFh5XT0o55INlxGdiKUqgDg9WncRV6u9GkTPnmGPjB557r41pRaZCnOAvJgxW5u3Z2y4gysjfjek509dgbC4UEhGiPQx1y7sfuHvOAdD1jfyzRQVicEtCZhvXxcPffiNT0VAADmGEs3xhni8Fsl_13nCiuBdXiqiGewNbfxKpGPiHsjrhv7f8nZ0vYJgU3Ycj0zcHBc6jM4mwRQHKX05hxHu5gOrH7swBQ0GseW0NH-jH4Kcbr1nPLuwAKp_d7tMjRdAvQrB8vgFlUwCSjQcb-suR9QFqC6QSiRWua-BKCoCsvBMoLP_l97zYz49NMiiRfxF7Gq9Qhc6r8VZ1SB1qUJ34YVhg4MK10xr7v01-978uzZHG8Qgv1vZAwgRTBd9Hf9hhDjmKBfuuYPf5fFMjvHhQoZtMXQDoAHG0a9e52p_0jPAYmVdVExWAjqH7MoYkizcjA_L_MNWN-zUQkkJI6Ix8PiwmptCxULRAWnYFcgHlp0Jhehlqj-W7YszEIRaBYkSSaMsOcMtonMjaG-aHRH3cnoSvBJRn0RQj0N0mUemxiDtunfewXZ8pVXXC04VFvd49eVXvBjJdbEtRLv-apyLGFLTsUN-XuX_t2lt1OyjhrVlgYBy980GJk-eD5Jauc60Uu3uvQ9SK8kGbcTcsALXn6vekh0FtER2bw-vAjjAtntrReZMnH5cnTdGZ-7k74456mfsxBdjqOby4u7VfMqMlUXNfdHQc=w619-h822-no?authuser=0" referrerPolicy="no-referrer"></img>
          <h3 >Redmi</h3>
        </li>
        
      </ul>
    </aside>
  )
}