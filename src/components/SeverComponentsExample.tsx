import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

const ServerComponentExample = async () => {
  const supabase = createServerComponentClient({ cookies })

  const { data } = await supabase.from("products").select("*")

  return <div>{JSON.stringify(data)}</div>
}

export default ServerComponentExample